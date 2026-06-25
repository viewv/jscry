const fs = require("fs");
const path = require("path");
const util = require("util");
const crypto = require("crypto");
const { exec } = require("child_process");

const { findContainingFunction } = require("./src/middle/slice_code");

const TMP_REPORT_FILEPATH = "/mnt/shared/temp";
const RESULT_PATH = "/mnt/shared/sliced";

function convertPositionToOffset(code, position) {
  const lines = code.split("\n");
  let startOffset = 0;
  let endOffset = 0;

  for (let i = 0; i < position.start.line - 1; i++) {
    startOffset += lines[i].length + 1;
  }
  startOffset += position.start.column - 1;

  for (let i = 0; i < position.end.line - 1; i++) {
    endOffset += lines[i].length + 1;
  }
  endOffset += position.end.column - 1;

  return {
    start: startOffset,
    end: endOffset,
  };
}

const readFileAsync = util.promisify(fs.readFile);
const execAsync = util.promisify(exec);

async function analyzeFile(filePath) {
  try {
    const jsonString = await readFileAsync(filePath, "utf8");
    const data = JSON.parse(jsonString);

    // still need to put the code path into the final report
    const codepath = data.filePath;

    const beautifyCommand = `js-beautify -r ${codepath}`;

    try {
      const { stdout, stderr } = await execAsync(beautifyCommand);
      if (stderr) {
        console.error(`Beautify stderr: ${stderr}`);
      }
      console.log(`Beautified code at: ${codepath}`);
    } catch (error) {
      console.error(`Beautify Error: ${error.message}`);
      return;
    }

    const codeHash = crypto.createHash("sha256").update(codepath).digest("hex");
    const temp_reportPath = path.join(TMP_REPORT_FILEPATH, `${codeHash}.json`);

    // 4. 顺序执行分析命令
    const command = `node ./crypto-cli-tool-static.js ${codepath} ${temp_reportPath}`;

    try {
      const { stdout, stderr } = await execAsync(command);
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
    } catch (error) {
      console.error(`Execution error: ${error.message}`);
      return;
    }

    const reportPath = temp_reportPath;
    console.log("Report Path:", reportPath);

    const reportData = await readFileAsync(reportPath, "utf8");
    const report = JSON.parse(reportData);

    const algorithms = [...new Set(report.results.algorithms)];
    const detailed_results = report.results.detailed_results;

    // for loop to get the detailed results
    let resultCount = 0;
    for (const algorithm of algorithms) {
      const algorithmResults = detailed_results[algorithm];
      if (algorithmResults) {
        let slicedCodesHash = new Set();
        for (const result of algorithmResults) {
          // TODO for now if we find the variable named as ___ we will use this to slice the code
          if (result.variable === "___") {
            const position = result.position;
            // use the position to slice the code
            const code = fs.readFileSync(codepath, "utf8");
            const offset = convertPositionToOffset(code, position);
            console.log("Target code position:", position);
            console.log(
              "Target code slice:",
              code.slice(offset.start, offset.end)
            );
            const slice_result = findContainingFunction(code, offset);
            if (slice_result) {
              console.log("\n=== 切片结果 ===");
              console.log("函数类型:", slice_result.type);
              console.log("函数名称:", slice_result.name);
              console.log("位置范围:", slice_result.range);
              console.log(
                "行号范围:",
                `${slice_result.loc.start.line}-${slice_result.loc.end.line}`
              );
              // console.log("\n=== 切片代码 ===");
              // console.log(slice_result.code);
              const sliceCode = slice_result.code;
              // check the hash of the sliced code first, if it is the same as the previous one, skip saving
              const sliceCodeHash = crypto
                .createHash("sha256")
                .update(sliceCode)
                .digest("hex");
              if (slicedCodesHash.has(sliceCodeHash)) {
                console.log(
                  `Slice code already exists, skipping saving for hash: ${sliceCodeHash}`
                );
                continue; // skip saving this slice code
              }
              // save the sliced code to the result path
              // first if the Algorithm sub directory does not exist, create it
              const algorithmDir = path.join(RESULT_PATH, algorithm);
              // second use the codeHash_algorithm_resultCount.js to save the sliced code
              const outputFileName = `${codeHash}_${algorithm}_${resultCount}.js`;
              const outputFilePath = path.join(algorithmDir, outputFileName);
              // first inser the original code path and slice location as comments into the sliced code
              const originalCodePathComment = `// Original code path: ${codepath}\n`;
              const sliceLocationComment = `// Slice location: ${JSON.stringify(position)}\n`;
              slice_result.code =
                originalCodePathComment +
                sliceLocationComment +
                slice_result.code;
              // then write the sliced code to the file
              console.log(`Writing slice result to: ${outputFilePath}`);
              // write the sliced code to the file
              if (!fs.existsSync(RESULT_PATH)) {
                fs.mkdirSync(RESULT_PATH, { recursive: true });
              }
              if (!fs.existsSync(algorithmDir)) {
                fs.mkdirSync(algorithmDir, { recursive: true });
              }
              // write the sliced code to the file
              fs.writeFileSync(outputFilePath, slice_result.code, "utf8");
              resultCount++;
            }
          }
        }
      } else {
        console.log(`No results for algorithm: ${algorithm}`);
      }
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("File Read Error:", err.message);
    } else if (err instanceof SyntaxError) {
      console.error("JSON process error:", err.message);
    } else {
      console.error("Unknown Error:", err.message);
    }
  }
}

function main() {
  // 获取命令行参数
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Usage: node slice.js <input_file_path> [output_file_path]");
    console.error("Examples:");
    console.error("  node slice.js /path/to/file.js");
    console.error("  node node slice.js /path/to/file.js /path/to/output.json");
    console.error("");
    console.error(
      "If output_file_path is not specified, it will be auto-generated as:"
    );
    console.error(
      "  <input_file_directory>/<input_file_name>.crypto-analysis.json"
    );
    process.exit(1);
  }

  const inputFilePath = args[0];

  // 分析文件
  analyzeFile(inputFilePath);
}

// 运行主函数
if (require.main === module) {
  main();
}
