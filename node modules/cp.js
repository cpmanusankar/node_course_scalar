// child process is a node module used to create sub process with script
// you can perform different task with your script by just using some method


const cp = require('child_process')

// cp.execSync('calc')

// cp.execSync('start chrome manusankarcp.netlify.com')

console.log('otuput' + cp.execSync('node demo.js'))