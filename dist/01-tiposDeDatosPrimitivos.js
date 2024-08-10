"use strict";
/* SINTAXIS DE TYPESCRIPT */
// let nombreDeVariable: tipoDeDato = ValorVariable;
/* TIPOS DE DATOS PRIMITIVOS */
// string
const nombre = "Juan";
// number
const edad = 30;
// boolean
const esSoltero = true;
// undefined
const u = undefined;
// null
const n = null;
/* TIPOS DE DATOS ESPECIALES */
// any
const pais = "Bolivia";
// void
// Útil para indicar que una función no regresa ningún tipo de dato.
function mostrarmensaje(mensaje) {
    console.log(mensaje);
}
console.log(mostrarmensaje("Hola mundillo"));
// never
// Representa el tipo de valor que nunca ocurren.
function error(mensaje) {
    throw new Error(mensaje);
}
console.log(error("Error"));
