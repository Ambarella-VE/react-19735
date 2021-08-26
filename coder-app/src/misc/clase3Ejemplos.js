/* eslint-disable no-unused-vars */
const arr = [1,2,3]

/* ------------- Sin Sugar-Syntax ------------- */
for (  let i = 0; i < arr.length; i = i + 1 ) {continue}

/* --------- Ejemplos con Sugar-Syntax -------- */
for (  let i = 0; i < arr.length; i++ ) {continue}
for (  let i = 0; i < arr.length; i+=2 ) {continue}

/* ------------- Sin Sugar-Syntax ------------- */
function condition (){
  if(1+1){
    return 'ifTrue'
  }else{
    return 'ifFalse'
  }
}

const res = condition ()
console.log(res)


/* Con Sugar-Syntax */
const response = 1+1 ? 'ifTrue'  :  'ifFalse' 

console.log(response)


/* -------------------------------------------- */
/*                   Polyfills                  */
/* -------------------------------------------- */

const miArray = [1, 2, 3]

const miNuevoArray = miArray.map(num => num * 2)

console.log(miNuevoArray)

/* Ejemplo de cómo hacer un polyfill, en este caso un método */

// eslint-disable-next-line no-extend-native
Array.prototype.miMap = function (callback) {
  let arrayTransformado = []
  
  for(let index = 0; index < this.length; index++){
    const elemento = this[index]
    const elementoTransformado = callback(elemento)
    arrayTransformado.push(elementoTransformado)
  }

  return arrayTransformado
}

const miSegundoArray = miArray.miMap(num => num * 2)

console.log(miSegundoArray)