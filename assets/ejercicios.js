// 📌 1. Edad y conducir

let edad = 20; // Cambia este valor para probar

if (edad >= 18) {
    console.log("La persona es mayor de edad y puede conducir.");
} else {
    console.log("La persona es menor de edad y no puede conducir.");
}

// 📌 2. Calificación según nota
let nota = 8; // Cambia este valor para probar

if (nota >= 0 && nota < 3) {
    console.log("Muy deficiente");
} else if (nota >= 3 && nota < 5) {
    console.log("Insuficiente");
} else if (nota >= 5 && nota < 6) {
    console.log("Suficiente");
} else if (nota >= 6 && nota < 7) {
    console.log("Bien");
} else if (nota >= 7 && nota < 9) {
    console.log("Notable");
} else if (nota >= 9 && nota <= 10) {
    console.log("Sobresaliente");
} else {
    console.log("Nota no válida");
}

//📌 3. Pirámide repetida (1 a 6)
for (let i = 1; i <= 6; i++) {
    console.log(i.toString().repeat(i));
}

//📌 4. Pirámide creciente (1 a 6)
let linea = "";
for (let i = 1; i <= 6; i++) {
    linea += i; // agrega el número a la línea
    console.log(linea);
}

//📌 1. Función que concatena strings de un array
function concatenarStrings(array) {
    return array.join('');
}

// Ejemplo
console.log(concatenarStrings(['hola', 'chau'])); // "holachau"

//📌 2. Función que devuelve los elementos en común entre dos arrays
function elementosEnComun(arr1, arr2) {
    return arr1.filter(valor => arr2.includes(valor));
}

// Ejemplos
console.log(elementosEnComun(['rojo', 'azul', 'amarillo'], ['blanco', 'negro', 'rojo']));
// ['rojo']

console.log(elementosEnComun([4, 3, true, 'manzana'], ['pera', 3, false, true, 3, true]));
// [3, true]


//⚡ Nota: filter recorre el primer array y includes verifica si el valor existe en el segundo.

//📌 3. Agregar producto al carrito y actualizar total
let carrito = {
    total: 10,
    productos: [
        {
            nombre: 'leche',
            precio: 2,
            unidades: 5
        }
    ]
};

function agregarProducto(nombre, precio, unidades) {
    // Crear producto nuevo
    let nuevoProducto = {
        nombre: nombre,
        precio: precio,
        unidades: unidades
    };

    // Agregarlo al array de productos
    carrito.productos.push(nuevoProducto);

    // Actualizar el total
    carrito.total += precio * unidades;
}

// Ejemplo de uso
agregarProducto('pan', 1, 3);
console.log(carrito);
/*
{
  total: 13,
  productos: [
    { nombre: 'leche', precio: 2, unidades: 5 },
    { nombre: 'pan', precio: 1, unidades: 3 }
  ]
}
*/


/*salidas: La persona es mayor de edad y puede conducir.
Notable
1
22
333
4444
55555
666666
1
12
123
1234
12345
123456
holachau
[ 'rojo' ]
[ 3, true ]
{
  total: 13,
  productos: [
    { nombre: 'leche', precio: 2, unidades: 5 },
    { nombre: 'pan', precio: 1, unidades: 3 }
  ]
}*/

