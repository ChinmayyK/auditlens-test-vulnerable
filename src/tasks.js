const childProcess = require('child_process')

function runBackup(path) {
  return childProcess.execSync('tar -czf backup.tgz ' + path).toString()
}

function pingHost(host) {
  return childProcess.exec('ping -c 1 ' + host)
}

module.exports = {
  runBackup,
  pingHost,
}
