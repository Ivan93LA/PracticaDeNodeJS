//File System

const fs = require ('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isDirectory(),
    stats.size
)