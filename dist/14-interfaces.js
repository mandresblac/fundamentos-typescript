"use strict";
/*
¿Qué es una interfaz?
En palabras poco técnicas una interfaz es como una especie de molde para nuestro datos. No debemos confundir el término con la UI de una app, en este caso el concepto de interfaz se relaciona más con la estructura de los datos de nuestro software. Por ejemplo:
*/
/*
En este caso, tenemos 3 interfaces: Persona, Perro, Vehiculo. Cada una de ellas se declara con la palabra reservada interface seguido del nombre de la interfaz (en Pascal Case) y entre llaves todas las propiedades con sus tipos de datos separadas por ;.
*/
/* Interfaz como tipo de dato */
// Las interfaces se usan como tipos de datos personalizables, con los ejemplos anteriores podríamos crear objetos de la siguiente manera:
const pedro = {
    id: 1,
    nombre: "Pedro",
    apellido: "Sanchez",
    edad: 36,
    esSoltero: true,
};
const hilux = {
    placa: 'HYK-256',
    color: 'rojo',
    marca: 'Toyota',
    esNuevo: true,
};
// nombre es de solo lectura
const boby = {
    id: "125-boby",
    nombre: "Boby",
    color: ["cafe", "blanco"],
    raza: "cooker",
    sexo: "Macho"
};
boby.raza = "pastor aleman";
console.log(boby);
boby.nombre = "Rufo";
console.log(boby);
const miBici = {
    placa: '123-abc',
    color: 'negro',
    marca: 'Santusa',
    esNuevo: true,
    esMontañera: true,
    traccion: 21,
};
/*
La interfaz Bicicleta hereda todas las propiedades de Vehiculo3, por tanto, el objeto miBici debe tener tanto los atributos de Bicicleta como los de Vehiculo.

Para este ejemplo podemos hacer opcionales las propiedades ruedas y puertas ya que para la interfaz Bicicleta no tiene mucho sentido.
*/
/*
Conclusiones:

- Las interfaces son una forma de estructurar los datos de nuestro software creando tipos de datos específicos.
- Puedes usar parámetros opcionales con ?
- Las interfaces soportan herencia con extends
- Con readonly podemos hacer propiedades de solo lectura.
*/ 
