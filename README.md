编写文档时，我们提倡英文单词与中文字符之间，有一个空格（参考[《中文技术文档写作规范》](https://github.com/ruanyf/document-style-guide/blob/master/docs/text.md)）。

```markdown
有空格的写法：学习 JavaScript 语言

无空格的写法：学习JavaScript语言
```

印刷排版时，往往要求英文单词与中文字符之间，不能有空格。Turpan-remove-space 就是移除这种空格的工具，返回处理后的 HTML 文件。

## 用法

```bash
# 安装
$ npm install -g turpan-remove-space
```

接着，将所有 Markdown 文件放在一个目录之中。（注意：暂时不支持子目录之中的 Markdown 文件。）

```bash
$ trs --dir /path/to/markdown/dir
```

运行上面的命令之后，会在该目录旁，生成另一个目录，比如`docs-1499348264449`，里面包含了转码后的 HTML 文件。

## 转码规则

单个英文词汇与汉字之间的空格，都将被去除。

```markdown
转码前：学习 JavaScript 语言

转码后：学习JavaScript语言
```

此外，还可以自己指定去除空格的词汇。

```bash
$ tse --dir /path/to/markdown/dir --word '计算机,人工智慧'
```

上面代码中，多个词汇之间使用半角逗号分隔。注意，逗号前后不能有空格。

```markdown
转码前：学习 计算机 语言

转码后：学习计算机语言
```

