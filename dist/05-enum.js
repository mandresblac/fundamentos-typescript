"use strict";
/*
Los "enum" son un tipo de dato en TypeScript. Esta característica no es una extensión de JavaScript, sino una peculiaridad propia de TypeScript.

En pocas palabras un enum se encarga de juntar en un solo tipo de dato un conjunto de constantes.

Los enum también aparecen en otros lenguajes de programación como por ejemplo C
*/
/* SINTAXIS */
/*
enum nombreEnum {
  valor1,
  valor2,
  valor3
}
*/
// Los valores de un enum pueden ser numéricos o literales, como veremos a continuación:
// enum numerico
var Dias;
(function (Dias) {
    Dias[Dias["Lunes"] = 0] = "Lunes";
    Dias[Dias["Martes"] = 1] = "Martes";
    Dias[Dias["Miercoles"] = 2] = "Miercoles";
    Dias[Dias["Jueves"] = 3] = "Jueves";
    Dias[Dias["Viernes"] = 4] = "Viernes";
    Dias[Dias["Sabado"] = 5] = "Sabado";
    Dias[Dias["Domingo"] = 6] = "Domingo"; // posición 6
})(Dias || (Dias = {}));
console.log(Dias);
console.log(Dias.Martes);
// En los enum el indice o posicion de cada elemento inicia desde 0, se puede cambiar este comportamiento de la siguiente manera:
var Dias2;
(function (Dias2) {
    Dias2[Dias2["Lunes"] = 10] = "Lunes";
    Dias2[Dias2["Martes"] = 11] = "Martes";
    Dias2[Dias2["Miercoles"] = 12] = "Miercoles";
    Dias2[Dias2["Jueves"] = 13] = "Jueves";
    Dias2[Dias2["Viernes"] = 14] = "Viernes";
    Dias2[Dias2["Sabado"] = 15] = "Sabado";
    Dias2[Dias2["Domingo"] = 16] = "Domingo";
})(Dias2 || (Dias2 = {}));
console.log(Dias2.Martes); // 11
// enum de cadena de texto o literales
var Dias3;
(function (Dias3) {
    Dias3["Lunes"] = "Lunes";
    Dias3["Martes"] = "Martes";
    Dias3["Miercoles"] = "Miercoles";
    Dias3["Jueves"] = "Jueves";
    Dias3["Viernes"] = "Viernes";
    Dias3["Sabado"] = "Sabado";
    Dias3["Domingo"] = "Domingo";
})(Dias3 || (Dias3 = {}));
console.log(Dias3.Martes);
// enum como tipo de dato
// Recuerda que como string, number, boolean, etc., enum es un tipo de dato y puede ser usado como tal:
var Dias4;
(function (Dias4) {
    Dias4["Lunes"] = "Lunes";
    Dias4["Martes"] = "Martes";
    Dias4["Miercoles"] = "Miercoles";
    Dias4["Jueves"] = "Jueves";
    Dias4["Viernes"] = "Viernes";
    Dias4["Sabado"] = "Sabado";
    Dias4["Domingo"] = "Domingo";
})(Dias4 || (Dias4 = {}));
function imprimirSaludo(mensaje, dia) {
    console.log(`${mensaje}, hoy es ${dia}. Feliz 2024!`);
}
console.log(imprimirSaludo("Hola mundo", Dias4.Jueves));
// Podemos usar un enum como parámetro de una función sin ningún problema.
