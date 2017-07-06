'use strict';

var test = require('tape');
var md = require('../lib');

test('markdown test: general rules', function (t) {
  t.plan(4);

  t.equal(
    md.render('我开始学习 ES6 语言'),
    '<p>我开始学习ES6语言</p>\n'
  );

  t.equal(
    md.render('我开始学习ES6 语言'),
    '<p>我开始学习ES6语言</p>\n'
  );

  t.equal(
    md.render('我开始学习 ES6语言'),
    '<p>我开始学习ES6语言</p>\n'
  );

  t.equal(
    md.render('ES6 语言'),
    '<p>ES6语言</p>\n'
  );
});

test('markdown test: word rules', function (t) {
  t.plan(4);
  md.words = '计算机,电脑';

  t.equal(
    md.render('计算机 语言'),
    '<p>计算机语言</p>\n'
  );

  t.equal(
    md.render('我买了笔记本 电脑。'),
    '<p>我买了笔记本电脑。</p>\n'
  );

  t.equal(
    md.render('我买了笔记本电脑 。'),
    '<p>我买了笔记本电脑。</p>\n'
  );

  t.equal(
    md.render('学习 电脑 语言'),
    '<p>学习电脑语言</p>\n'
  );
});
