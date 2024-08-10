/* 
TypeScript tiene un tipo muy interesante que es ridículamente útil. Este tipo es Function (con mayúscula). Pero, ¿para qué nos sirve este tipo de dato?

Function indica a una variable que está solo puede contener una referencia a una funcion, caso contrario arroja un hermoso error.

Veamos un ejemplo:
*/

const filtrarNombres = (arr:string[]):string[] => {
  return arr.filter((item) => item === "Carlos" || item === "Susana")
}

const saludo = () => console.log("Hola mundo")

const nombres = ["Carlos", "Juan", "Pedro", "Susana", "Camilo"]
let resultado: (arreglo:string[]) => string[]
resultado = filtrarNombres;
console.log(resultado(nombres)); // ["Carlos", "Susana"]

/* 
Conclusiones
- El Type Function es super útil para restringir que una variable solo puede almacenar funciones.
- Podemos usar el tipo Function para lograr esto, pero la desventaja es que es muy general y nuestras variables podrán soportar cualquier tipo de función.
- Podemos declarar el tipo de la función en concreto para indicarle la cantidad de parámetros, sus tipos de datos y su valor de retorno. En otras palabras como si le pusiéramos un candado a la variable para que solo reciba funciones concretas y específicas.
*/