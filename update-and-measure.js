const exec = require('mz/child_process').exec

function puts(error, stdout, stderr) { console.log(stdout) }

Promise.all([
  exec("jspm update", {
    cwd: 'jspm'
  }, puts),
  exec("npm update", {
    cwd: 'webpack'
  }, puts)
]).then(() => {
  exec("npm run build", {
    cwd: 'jspm'
  }, puts)
  exec("npm run build", {
    cwd: 'webpack'
  }, puts)
})
