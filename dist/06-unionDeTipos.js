"use strict";
/*
¿Qué es la unión de tipos?
Esta funcionalidad que se identifica con el simbolo "|" , nos permite generalizar la declaración de variables y funciones, dicho de otra manera, podemos hacer que una variable admita más de un tipo de dato, haciendo un poco más flexible a TypeScript.
*/
/* SINTAXIS */
// let nombreVariable: tipoA | tipoB | tipoN = valor;
// Veamos algunos ejemplos:
// La constande id acepta tanto number como string:
let id = 10;
/* UNION DE TIPOS EN ARRAYS */
const array = ["Hola mundo", 1, 2, 3];
/* UNION DE TIPOS EN OBJETOS */
// El objeto persona en sus propiedades id y telefono puede aceptar como valor números o cadenas.
const persona = {
    id: "1",
    nombre: "Luis",
    telefono: "99-5269-122"
};
/* UNION DE TIPOS EN FUNCIONES */
// En funciones es posible usar unión de tipos en los parámetros y en su valor de retorno, por ejemplo:
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
// En el ejemplo anterior dependiendo de los argumentos que pasemos a la función, la misma reacciona de diferente manera; si le pasamos cadenas las concatena y si le pasamos números los suma.
