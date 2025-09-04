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