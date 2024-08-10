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
enum Dias {
  Lunes, // posición 0
  Martes, // posición 1
  Miercoles, // posición 2
  Jueves, // posición 3
  Viernes, // posición 4
  Sabado, // posición 5
  Domingo // posición 6
}

console.log(Dias);
console.log(Dias.Martes);

// En los enum el indice o posicion de cada elemento inicia desde 0, se puede cambiar este comportamiento de la siguiente manera:
enum Dias2 {
  Lunes = 10, //10
  Martes, //11
  Miercoles, //12
  Jueves, //13
  Viernes, //14
  Sabado, //15
  Domingo, //16
}

console.log(Dias2.Martes) // 11

// enum de cadena de texto o literales
enum Dias3 {
  Lunes= "Lunes",
  Martes= "Martes",
  Miercoles= "Miercoles",
  Jueves= "Jueves",
  Viernes= "Viernes",
  Sabado= "Sabado",
  Domingo= "Domingo",
}

console.log(Dias3.Martes);

// enum como tipo de dato
// Recuerda que como string, number, boolean, etc., enum es un tipo de dato y puede ser usado como tal:

enum Dias4 {
  Lunes= "Lunes",
  Martes= "Martes",
  Miercoles= "Miercoles",
  Jueves= "Jueves",
  Viernes= "Viernes",
  Sabado= "Sabado",
  Domingo= "Domingo",
}

function imprimirSaludo(mensaje: string, dia: Dias4): void {
  console.log(`${mensaje}, hoy es ${dia}. Feliz 2024!`);
}

console.log(imprimirSaludo("Hola mundo", Dias4.Jueves));

// Podemos usar un enum como parámetro de una función sin ningún problema.
