const yargs = require('yargs');
const md = require('turpan');

const iterator = require('markdown-it-for-inline');

md.use(iterator, 'remove_space', 'text', function (tokens, idx) {
  // Word Rules
  let words = ['ECMAScript 6', 'ECMAScript 2015'];
  if (md.words) {
    let externalWords = md.words.split(',');
    words = words.concat(externalWords);
  }
  let wordList = words.join('|');

  // pattern: ^Word 词汇
  const reg1 = new RegExp('^(' + wordList + ')\\s([^a-zA-Z0-9\\s])', 'g');
  tokens[idx].content = tokens[idx].content.replace(reg1, '$1$2');

  // pattern: 学习Word 词汇
  const reg2 = new RegExp('([^a-zA-Z0-9\\s])(' + wordList + ')\\s([^a-zA-Z0-9\\s])', 'g');
  tokens[idx].content = tokens[idx].content.replace(reg2, '$1$2$3');

  // pattern: 学习 Word词汇
  const reg3 = new RegExp('([^a-zA-Z0-9\\s])\\s(' + wordList + ')([^a-zA-Z0-9\\s])', 'g');
  tokens[idx].content = tokens[idx].content.replace(reg3, '$1$2$3');

  // pattern: 学习 Word 词汇
  const reg4 = new RegExp('([^a-zA-Z0-9\\s])\\s(' + wordList + ')\\s([^a-zA-Z0-9\\s])', 'g');
  tokens[idx].content = tokens[idx].content.replace(reg4, '$1$2$3');

  // General Rules
  // pattern: ^Word 词汇
  tokens[idx].content = tokens[idx].content.replace(/^([a-zA-Z0-9]+?)\s([^a-zA-Z0-9\s])/g, '$1$2');
  // pattern: 学习Word 词汇
  tokens[idx].content = tokens[idx].content.replace(/([^a-zA-Z0-9\s])([a-zA-Z0-9]+?)\s([^a-zA-Z0-9\s])/g, '$1$2$3');
  // pattern: 学习 Word词汇
  tokens[idx].content = tokens[idx].content.replace(/([^a-zA-Z0-9\s])\s([a-zA-Z0-9]+?)([^a-zA-Z0-9\s])/g, '$1$2$3');
  // pattern: 学习 Word 词汇
  tokens[idx].content = tokens[idx].content.replace(/([^a-zA-Z0-9\s])\s([a-zA-Z0-9]+?)\s([^a-zA-Z0-9\s])/g, '$1$2$3');
});

module.exports = md;

