const fs = require ('node:fs/promises')
console.log('Leyendo el primer archivo...')
fs.readFile ('./archivo.txt', 'utf-8')
  .then(text => {
 console.log('primer texto:',text)
})

console.log ('--> Hacer cosas mientras lee el archivo')
//Todo va de forma secuencial
console.log('Leyendo el segundo archivo...')
fs.readFile ('./archivo2.txt', 'utf-8') 
  .then(text => {
 console.log('segundo texto', text)
})