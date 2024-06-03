

const numeros = [9, 2, 8, 7, 5, 6, 6, 1, 3, 4, 2, 8, 1, 7, 6];


async function obtenerPares(arreglo) {
    return arreglo.filter(numero => numero % 2 === 0);
}

obtenerPares(numeros).then(pares => {
    console.log('Arreglo original:', numeros);
    console.log('Arreglo de pares:', pares);
});




const estudiantes = [{name: 'Mane', age: '15'},{name: 'Andrea', age: '22'}, {name: 'Alma', age: '19'}, {name: 'Emma', age: '29'},
    {name: 'Maria', age: '13'}, {name: 'Luis', age: '16'},{name: 'Yair', age:'21'}]

async function obtenerNombresMayoresDe18(arreglo) {
    const mayoresDe18 = [];
    for (const estudiante of arreglo) {
        if (estudiante.age > 18) {
            mayoresDe18.push(estudiante.name);
        }
    }
    return mayoresDe18;
}
obtenerNombresMayoresDe18(estudiantes)
    .then(nombres => {
        console.log("Original:", estudiantes);
        console.log("Nombres de estudiantes mayores de 18 años:", nombres);
    });
