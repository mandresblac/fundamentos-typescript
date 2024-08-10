"use strict";
/* DECLARACIÓN DE FUNCIONES */
/*
Para declarar funciones se deben tener en cuenta 2 cosas importantes para sacar el jugo a typescript:

1- Poner explícitamente el tipo de dato a los parámetros de una función.

2- Tener en cuenta que las funciones también tienen un tipo de retorno, acá encontré opiniones divididas, algunos devs sugieren que el compilador de typescript infiera el tipo de retorno de la función, en cambio otros proponen que debe ser el desarrollador quien escriba explícitamente dicho tipo de retorno. Personalmente, a mi me gusta optar por escribir explícitamente el tipo de retorno, así queda claro a simple vista que es lo que esa función debe regresar.
*/
/* Funciones clásicas vs Funciones de flecha */
// Funciones clásicas
// En Typescript tenemos que añadirle el tipo de dato a los parámetros y el tipo de retorno a la función
function potencia(base, exponente) {
    return base ** exponente;
}
console.log(potencia(5, 2)); //25
// Recuerda que al no poner el tipo de retorno de la función, TypeScript inferirá dicho tipo de retorno, en este caso number.
// Funciones de flecha
const potencia2 = (base, exponente) => base ** exponente;
console.log(potencia2(2, 8)); //256
/* VOID PARA FUNCIONES */
// El tipo de dato void puede ser usado en una función cuando sabemos de antemano que esta no devolverá nada, por ejemplo:
const saludo = (nombre) => console.log(`Hola ${nombre}`);
console.log(saludo("Cris")); // Hola Cris
// El cuerpo de la función no tiene una sentencia return por ende no regresa nada, en este caso es muy aconsejable usar void como tipo de regreso.
/*
Conclusiones
- Las funciones en TypeScript necesitan declarar el tipo de sus datos y el tipo de retorno.
- Pueden ser funciones clásicas usando la palabra reservada function o funciones flecha.
- void es útil para funciones que no regresan nada.
*/
