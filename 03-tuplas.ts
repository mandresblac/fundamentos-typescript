// Las tuplas en esencia son arreglos, pero arreglos limitados a cierta cantidad de elementos y a ciertos tipos de datos, permiten crear arreglos con valores concretos y tipos exactos en cuanto a posiciones se refiere y son más rápidos que los arreglos tradicionales.

/* SINTAXIS DE LAS TUPLAS */
// const nombreTupla: [tipoDato1, tipoDato2, ...tipoDatoN] = [valor1, valor2, ... valorN];

/* FUNCIONAMIENTO DE LA TUPLAS */

// Podríamos tener una tupla temperatura1 de 2 posiciones, que contega la temperatura y su unidad de medida:
const temperatura1: [number, string] = [20, "C"];

// La tupla anteriror solo puede contener 2 elementos, el primero un number, y el segundo un string, exactamente en ese orden.

// Si tuvieramos la tupla invertida obtendríamos un error:
const temperatura2: [number, string] = ["C", 20];

// Estamos tratando de asignar un tipo string a un tipo number, por ello nos arroja una advertencia como la siguiente: 
// Type 'string' is not assignable to type 'number'.

// Si intentamos agregar más de 2 elementos, por más que sean del tipo de dato permitido, este arrojará un error:
const temperatura3:[number, string] = [20, "C", 23, "F"];

// Para solucionarlo tendremos que añadir más tipos, de la siguiente manera:
const temperatura4 :[number, string, number, string] = [20, "C", 23, "F"];

// Caso especial usando el metodo .push
const temperatura5:[number, string, number, string] = [20, "C", 23, "F"];
temperatura5.push(30);
console.log(temperatura5);