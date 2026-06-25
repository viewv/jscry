网站代码
解包 debundler (现在只支持webpack，browerify)
针对每个代码使用detector(比如代码crypto-cli-tool)的到crypto特征信息 (json 文件，记录位置和变量)
使用AST工具读取相关位置信息
Agent 1：循环：LLM Agent根据信息分析代码，向上询问解析器搜索需要的代码信息
         使用AST工具进行代码收集，提供上下文给LLM
最后给出crypto情况的分析结果，可能的API调用格式

全代码分析寻找API调用

Agent 2: 针对给出的API信息，调用信息，分析是否存在误用，分析网站为什么使用
