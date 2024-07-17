const os = require('node:os')

console.log('Info del sistema operativo')
console.log('-----------------')
console.log('Nombre del sistema operativo', os.platform())
console.log('version del sistema operativo', os.release())
console.log('Arquitectura del sistema operativo', arch())
console.log('CPUs', os.cpus()) //<-- vamos a poder escalar los procesos
console.log('Memoria libre' , os.freemem() / 1024/1024)
console.log('Memoria total' , os.totalmem() / 1024/1024)
console.log('uptime', os.uptime() /60/60)