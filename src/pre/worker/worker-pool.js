const { Worker } = require('worker_threads');
const path = require('path');
const os = require('os');

class WorkerPool {
    constructor(maxWorkers = os.cpus().length) {
        this.maxWorkers = maxWorkers;
        this.workers = [];
        this.availableWorkers = [];
        this.taskQueue = [];
        this.activePromises = new Map();
        this.taskIdCounter = 0;

        this.initializeWorkers();
    }

    initializeWorkers() {
        const workerScript = path.join(__dirname, 'dynamic-analysis-worker.js');

        for (let i = 0; i < this.maxWorkers; i++) {
            const worker = new Worker(workerScript);

            worker.on('message', (result) => {
                this.handleWorkerMessage(worker, result);
            });

            worker.on('error', (error) => {
                console.error(`Worker ${i} error:`, error);
                this.handleWorkerError(worker, error);
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    console.error(`Worker ${i} stopped with exit code ${code}`);
                }
            });

            this.workers.push(worker);
            this.availableWorkers.push(worker);
        }

        console.log(`✅ Initialized ${this.maxWorkers} workers for dynamic analysis`);
    }

    async executeTask(task) {
        return new Promise((resolve, reject) => {
            const taskId = this.taskIdCounter++;
            const taskWithId = { ...task, taskId };

            this.activePromises.set(taskId, { resolve, reject });

            if (this.availableWorkers.length > 0) {
                this.assignTaskToWorker(taskWithId);
            } else {
                this.taskQueue.push(taskWithId);
            }
        });
    }

    assignTaskToWorker(task) {
        const worker = this.availableWorkers.pop();
        worker.currentTaskId = task.taskId;
        worker.postMessage(task);
    }

    // Unified handleWorkerMessage method, merging features of both versions
    handleWorkerMessage(worker, result) {
        const taskId = worker.currentTaskId;
        const promise = this.activePromises.get(taskId);

        if (promise) {
            promise.resolve(result);
            this.activePromises.delete(taskId);
        }

        // Return worker to available pool
        worker.currentTaskId = null;
        this.availableWorkers.push(worker);

        // Assign multiple tasks in batches instead of a single one
        this.assignMultipleTasks();
    }

    assignMultipleTasks() {
        while (this.availableWorkers.length > 0 && this.taskQueue.length > 0) {
            const task = this.taskQueue.shift();
            this.assignTaskToWorker(task);
        }
    }

    handleWorkerError(worker, error) {
        const taskId = worker.currentTaskId;
        const promise = this.activePromises.get(taskId);

        if (promise) {
            promise.reject(error);
            this.activePromises.delete(taskId);
        }

        // Remove failed worker and create new one
        const workerIndex = this.workers.indexOf(worker);
        if (workerIndex > -1) {
            this.workers.splice(workerIndex, 1);
        }

        const availableIndex = this.availableWorkers.indexOf(worker);
        if (availableIndex > -1) {
            this.availableWorkers.splice(availableIndex, 1);
        }

        // Create replacement worker
        this.createReplacementWorker();
    }

    createReplacementWorker() {
        const workerScript = path.join(__dirname, 'dynamic-analysis-worker.js');
        const worker = new Worker(workerScript);

        worker.on('message', (result) => {
            this.handleWorkerMessage(worker, result);
        });

        worker.on('error', (error) => {
            console.error('Replacement worker error:', error);
            this.handleWorkerError(worker, error);
        });

        this.workers.push(worker);
        this.availableWorkers.push(worker);
    }

    async executeParallel(tasks) {
        // For a large number of tasks, use batch processing
        if (tasks.length > this.maxWorkers * 2) {
            return this.executeBatched(tasks);
        }

        const promises = tasks.map(task => this.executeTask(task));
        return Promise.all(promises);
    }

    async executeBatched(tasks) {
        const results = [];
        const batchSize = this.maxWorkers * 3; // Process 30 tasks per batch

        for (let i = 0; i < tasks.length; i += batchSize) {
            const batch = tasks.slice(i, i + batchSize);
            console.log(`🔄 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(tasks.length / batchSize)} (${batch.length} tasks)`);

            const batchPromises = batch.map(task => this.executeTask(task));
            // Use Promise.allSettled instead of Promise.all
            const batchResults = await Promise.allSettled(batchPromises);

            // Process results, distinguishing successful and failed tasks
            const processedResults = batchResults.map((result, index) => {
                if (result.status === 'fulfilled') {
                    return result.value;
                } else {
                    console.warn(`Task ${i + index} failed:`, result.reason);
                    return { error: result.reason, taskIndex: i + index };
                }
            });

            results.push(...processedResults);

            // Give the system a short break
            if (i + batchSize < tasks.length) {
                await new Promise(resolve => setTimeout(resolve, 10));
            }
        }

        return results;
    }

    async shutdown() {
        console.log('🔄 Shutting down worker pool...');

        // Wait for all active tasks to complete
        while (this.activePromises.size > 0) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Terminate all workers
        for (const worker of this.workers) {
            await worker.terminate();
        }

        console.log('✅ Worker pool shut down complete');
    }
}

module.exports = WorkerPool;