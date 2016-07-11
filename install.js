const sys = require('sys')
const exec = require('child_process').exec

function puts(error, stdout, stderr) { console.log(stdout) }

exec("jspm i", {
  cwd: 'jspm'
}, puts);

exec("npm i", {
  cwd: 'webpack'
}, puts);
