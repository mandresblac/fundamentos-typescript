"use strict";
/*
Como vimos ya, TypeScript soporta la unión de tipos para que una variable pueda tener varios tipos de datos diferentes.

Los Tipos Literales son básicamente lo mismo, pero lo limitamos por lo general, a valores concretos, por ejemplo:
*/
let operaciones = "suma";
function concatOrSumValues(value1, value2, placeholder = 'to-sum') {
    let res;
    if (placeholder === 'to-sum') {
        res = +value1 + +value2;
    }
    else {
        res = value1.toString() + value2.toString();
    }
    return res;
}
console.log(concatOrSumValues(2, 2)); // 4
console.log(concatOrSumValues("3", "5", 'to-sum')); // 8
console.log(concatOrSumValues("2", "2", 'to-concat')); // '22'
console.log(concatOrSumValues("Hola", "mundo", 'to-concat')); // 'Holamundo'
console.log(concatOrSumValues("3", "3", 'to-conca')); // Argument of type '"to-conca"' is not assignable to parameter of type 'PlaceholderOperation'
// PlaceholderOperation solo puede recibir 2 cadenas específicas: to-sum o to-concat, cualquier otro string será un error.
