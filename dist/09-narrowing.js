"use strict";
/*
NARROWING
Es una técnica que se usa sobre todo en los parámetros de una función. Consiste en que por medio de validaciones podamos modificar el flujo de la función dependiendo si sus parámetros aceptan varios tipos de datos a la vez mediante uniones de tipos.

La forma más común de Narrowing se observa usando el operador typeof y condicionales, de este manera podemos controlar cómo actuará esa función de manera controlada y evitando bugs.
*/
// Veamos algunos ejemplos para comprender todo esto.
// Creamos una tupla de strings
const choices = ['NO', 'YES'];
// Funcion
const processAnswer = (answer) => {
    if (typeof answer === 'number') {
        console.log(choices[answer]);
    }
    else if (typeof answer === 'boolean') {
        if (answer) {
            console.log(choices[1]);
        }
        else {
            console.log(choices[0]);
        }
    }
};
console.log(processAnswer(0)); // Prints "NO"
console.log(processAnswer(1)); // Prints "YES"
console.log(processAnswer(false)); // Prints "NO"
console.log(processAnswer(true)); // Prints "YES"
/*
Analicemos la función processAnswer, sólo recibe un parámetro answer que puede ser number o boolean.

Si answer es number:
Accedemos a la tupla choices en la posición que le pasemos, siendo choices[0] = 'NO' y choices[1] = 'SI'; ergo, si llamamos a la función processAnswer(0) obtendremos como salida NO.

Si answer es boolean:
Si answer existe entonces regresamos choices[1], osea SI.
Si answer no existe entonces regresamos choices[0] osea NO.
*/
// Veamos otro ejemplo:
function roughAge(age) {
    if (typeof age === 'number') {
        // In this block, age is known to be a number
        console.log(Math.floor(age));
    }
    else {
        // In this block, age is known to be a string
        console.log(age.split("")[0]);
    }
}
roughAge(3.5); // Prints 3
roughAge('3.5'); // Prints "3"
/*
La función roughAge recibe un solo parámetro age, nuevamente evaluamos que hará:

Si age es number redondeamos el valor hacia abajo con Math.floor(), por ello llamar roughAge(3.5) regresa el número 3.

Si age es string usamos el método split de las cadenas y obtenemos la primera posición de dicha cadena. Por ello si llamamos roughAge('3.5') obtenemos '3' como string.
*/
/*
Conclusiones:
Narrowing es un técnica muy poderosa y sencilla de comprender para que el flujo de las funciones hagan lo que nosotros necesitamos.
Usualmente typeof será nuestro mejor aliado al momento de hacer Narrowing.
*/ 
