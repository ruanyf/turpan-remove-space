#!/usr/bin/env node

const yargs = require('yargs');
const fs = require('fs-extra');
const path = require('path');
const md = require('../lib');

const argv = yargs
.option('dir', {
  alias: 'd',
  default: 'docs'
})
.option('word', {
  alias: 'w',
  default: ''
})
.help()
.argv;

if (!argv.dir) {
  throw new Error('Please use --dir option to specify a directory of markdown files');
}

if (!fs.existsSync(argv.dir)) {
  throw new Error(`The path ${argv.dir} does not exists!`);
}

const dir = fs.readdirSync(argv.dir);

let files = dir.filter(file => {
  let ext = path.extname(file);
  if (!ext) return false;
  if (ext.toLowerCase() !== '.md') return false;
  return true;
})

// Destination Dir
const dest = path.resolve(
  path.resolve(argv.dir),
  '../docs-' + Number(new Date())
);
fs.mkdirpSync(dest);

files.forEach(f => {
  let content = fs.readFileSync(
    path.resolve(argv.dir, f),
    {encoding: 'utf8'}
  );
  md.words = argv.word;
  let newContent = md.render(content);
  fs.writeFileSync(
    path.resolve(dest, f + '.html'),
    newContent,
    {encoding: 'utf8'}
  );
  console.log('writing to ', path.resolve(dest, f + '.html'));
});
