#!/usr/bin/env node

var orzata = require('commander');
var exec = require('child_process').exec;
var fs = require('fs');

orzata.version('0.0.5')
  .option('--init', 'Create the boilerplate')
  .parse(process.argv);

if(orzata.init) {

  mkdir('./node_statics');

  mkdir('./src');
  cp(__dirname + '/boilerplate/index.js', './index.js');

  mkdir('./src/configurations');
  cp(__dirname + '/boilerplate/src/configurations/develop.json',
    './src/configurations/develop.json');
  cp(__dirname + '/boilerplate/src/configurations/production.json',
    './src/configurations/production.json');

  mkdir('./src/controllers');
  mkdir('./src/models');
  mkdir('./src/views');

  mkdir('./src/views/templates');
  cp(__dirname + '/boilerplate/src/views/templates/template.pug',
    './src/views/templates/template.pug');
  mkdir('./src/views/templates/css');
  cp(__dirname + '/boilerplate/src/views/templates/css/template.scss',
    './src/views/templates/css/template.scss');
}

function mkdir(des) {
  if(!fs.existsSync(des)) {
    fs.mkdirSync(des);
    console.log(des);
  }
}

function cp(src, des) {
  if(!fs.existsSync(des)) {
    fs.readFile(src, function(err, data) {
      if(err) throw err;
      fs.writeFile(des, data, function(err) {
        if(err) throw err;
        console.log(des);
      });
    });
  }
}
