"use strict";
/* Cuando usamos uniones de tipos "|" el código suele volverse más verboso de lo que debería, para ello podemos usar Type Aliases para crear nuestros propios tipos de datos y luego solo asignarlos. */
// La sintaxis de los Type aliases es muy sencilla, usamos la palabra reservada type:
// type nombreDelAlias = unionDeTipos;
// Veamos algunos ejemplos:
// Para un arreglo, en vez de esto:
const arreglo = ["Hola mundo", 1, 2, 3, 4,];
const arreglo2 = [1, 2, 3, "Hola mundo"];
const persona1 = {
    id: "1",
    nombre: "Carlos",
    telefono: "97-5301-448",
};
function concatenarOSumar(valor1, valor2) {
    let isString = typeof valor1 === "string" && typeof valor2 === "string";
    let resultado;
    if (isString) {
        resultado = valor1.toString() + " " + valor2.toString();
    }
    else {
        resultado = Number(valor1) + Number(valor2);
    }
    return resultado;
}
console.log(concatenarOSumar("Carlos", "Ramirez")); // "Carlos Ramirez"
console.log(concatenarOSumar(2, 9)); // 11
// Arrow function
const esDiaLaboral = (dia) => {
    if (dia !== "Domingo" && dia !== "Sabado") {
        return "Dia laboral.";
    }
    else {
        return "Fin de Semana.";
    }
};
console.log(esDiaLaboral("Martes"));
console.log(esDiaLaboral("Viernes"));
console.log(esDiaLaboral("Sabado"));
console.log(esDiaLaboral("Domingo"));
