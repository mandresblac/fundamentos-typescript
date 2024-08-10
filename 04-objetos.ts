// En TypeScript un objeto se escribe exactamente igual que en JavaScript, pero con una gran diferencia en cuanto a funcionalidad:

// Opcion 1 para declarar un objeto, sintaxis implicita la mas usada y recomendada
const perro = {
  nombre: "Boby",
  edad: 5
};

// Opcion 2 para declarar un objeto, sintaxis explicita, menos usada
const perro2: {
  nombre: string,
  edad: number
} = {
  nombre: "Boby",
  edad: 5
};

// Accediendo a propiedades del objeto
// En TypeScript intentar añador una propiedad a un objeto como se hacia en Javascript no es posible, si lo intentamos obtendremos un error como el siguiente:
const perro3 = {
  nombre:"Boby",
  edad:5,
}
perro3.sexo = "macho";

// NOTA: En typescript no es posible añadir directamente propiedades a un objeto ni acceder a propiedades que no existen sin que antes el editor te lance un error.
