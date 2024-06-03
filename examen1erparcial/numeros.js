
const numeros = [9, 2, 8, 7, 5, 6, 6, 1, 3, 4, 2, 8, 1, 7, 6];

// II. Crear una función asíncrona para generar el arreglo de pares
async function generarPares(arr) {
    const pares = arr.filter(num => num % 2 === 0);
    return pares;
}

// III. Imprimir los 2 arreglos como resultado
async function imprimirArreglos() {
    const pares = await generarPares(numeros);
    console.log("Arreglo original:", numeros);
    console.log("Arreglo de pares:", pares);
}

// Llamar a la función para imprimir los arreglos
imprimirArreglos();
