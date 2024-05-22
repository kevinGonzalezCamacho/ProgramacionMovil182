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

//VERSION SIMPLIFICADA
/*const suma=(a,b)=> a+b

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


//console.log(usuarios)
//console.log(usuario.direccion.calle);
//console.log(usuario.amigos)

//metodos
console.log(usuario.enviaCorreo())
*/

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

