"use strict";
/*
En TypeScript para poder definir un parámetro opcional en una función basta con usar el símbolo de interrogacion "?" de la siguiente manera:
*/
function getUser(nombre, cuenta, foto) {
    if (foto) {
        return `El usuario ${nombre} tiene cuenta ${cuenta} y foto ${foto}`;
    }
    return `El usuario ${nombre} tiene cuenta ${cuenta}`;
}
console.log(getUser("Cris", "basic", "http://mi-photo"));
console.log(getUser("Fernando", "premium"));
// En este ejemplo, el parámetro foto es opcional puesto que tiene el símbolo ?, pese a que la función recibe 3 parámetros el último es opcional, por ende sino lo pasamos la función se ejecutara bien.
