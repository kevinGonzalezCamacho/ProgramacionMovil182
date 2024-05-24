//console.log('hola')
//Function
/*
function suma(a,b){
    return a+b
}

suma(2,3);

//VERSION NO SIMPLIFICADA
console.log(suma(2,3));
*/
/*
const suma = (a,b)=>{
    return a+ b
}

console.log(suma(2,3));
*/
/*
//VERSION SIMPLIFICADA
const suma=(a,b)=> a+b

console.log(suma(2,3));
*/
/*
const usuario = {
    nombre:'Ricardo',
    apellido:'Flores',
    edad: 20,
    direccion:{
        pais:'Mexico',
        ciudad:'Queretaro',
        calle:'5 de febrero'
    },
    amigos:['Alex','Carlos'],
    estatus: true,
    enviaCorreo: enviarCorr=()=>'envian-do...'
}


//console.log(usuario)
//console.log(usuario.direccion.calle);
//console.log(usuario.amigos)

//metodos
//console.log(usuario.enviaCorreo())


//trabajo con el  DOM 

const titulo = document.createElement('n1')
titulo.innerText = 'Soy un Titulo creado con JS'
document.body.append(titulo)

const boton = document.createElement('button')
boton.innerText = 'Precioname'
document.body.append(boton)

boton.addEventListener('click',function() {
    //console.log('Evento click ejecutando')
    titulo.innerText = "Evento click ejecutando"
    alert('Exito')
})
*/

// Trabajo con arreglos 
/*
const nombres = ['alan','isa','pablo','juan luis']

for(let i = 0; i < nombres.length; i++){
    const elemento = nombres[i]
    console.log(elemento)
}

nombres.forEach(function (nombre){
    console.log(nombre)
})

//funcion Map permite generar copia de un array 
const array2= nombres.map(function (nombre){ 
    console.log(nombre)
    return nombre
})

console.log(nombres)
console.log(array2)


//Funcion FIND ubicar elemtos de un arreglo 
const resultado= nombres.find(function (nombre){ 
    if(nombre === 'pablo'){ 
        return nombre
    }
})
console.log(resultado)


//funcion filter recorre el arreglo resultado 
const resultado= nombres.filter(function (nombre){ 
    if(nombre != 'pablo'){ 
        return nombre
    }
})
console.log(nombres)
console.log(resultado)


// funcion concat
const edades =[78,89,12,8,10,15]
console.log(nombres.concat(edades))

//funcion Spread operator
console.log([...nombres, ...edades])
*/

//modulo import y export

// import {suma,resta} from './calculadora.js'

import * as calc from "./calculadora.js"
console.log(calc.suma(45,54))
console.log(calc.resta(45,5))


