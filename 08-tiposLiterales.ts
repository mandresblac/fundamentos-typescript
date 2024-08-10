/* 
Como vimos ya, TypeScript soporta la unión de tipos para que una variable pueda tener varios tipos de datos diferentes.

Los Tipos Literales son básicamente lo mismo, pero lo limitamos por lo general, a valores concretos, por ejemplo:
*/
let operaciones:string = "suma";

// En el último ejemplo operaciones puede contener "resta", "multiplicacion" o "division", como también "manzana", "payaso" o "tomate", todos son cadenas válidas, pero no todas son cadenas apropiadas para nuestra variable. Por ello podemos usar Tipos Literales para limitar aun más los valores que puede admitir la variable operaciones, veamos un ejemplo con una función.

type StringOrNumber = string | number; // unión de tipos
type PlaceholderOperation = 'to-sum' | 'to-concat' // unión de tipos literales

function concatOrSumValues(value1:StringOrNumber, value2:StringOrNumber,placeholder:PlaceholderOperation = 'to-sum'):StringOrNumber {
  let res;
  if(placeholder === 'to-sum'){
    res = +value1 + +value2
  }else{
    res = value1.toString() +  value2.toString();
  }
  return res;
}

console.log(concatOrSumValues(2,2)); // 4
console.log(concatOrSumValues("3","5", 'to-sum')); // 8
console.log(concatOrSumValues("2","2", 'to-concat')); // '22'
console.log(concatOrSumValues("Hola","mundo", 'to-concat')); // 'Holamundo'
console.log(concatOrSumValues("3","3", 'to-conca')); // Argument of type '"to-conca"' is not assignable to parameter of type 'PlaceholderOperation'

// PlaceholderOperation solo puede recibir 2 cadenas específicas: to-sum o to-concat, cualquier otro string será un error.