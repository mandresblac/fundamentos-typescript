/* SINTAXIS DE TYPESCRIPT */
// let nombreDeVariable: tipoDeDato = ValorVariable;


/* TIPOS DE DATOS PRIMITIVOS */

// string
const nombre: string = "Juan";

// number
const edad: number = 30;

// boolean
const esSoltero: boolean = true;

// undefined
const u: undefined = undefined;

// null
const n: null = null;

/* TIPOS DE DATOS ESPECIALES */

// any
const pais: any = "Bolivia";

// void
// Útil para indicar que una función no regresa ningún tipo de dato.
function mostrarmensaje(mensaje: string): void {
  console.log(mensaje)
}
console.log(mostrarmensaje("Hola mundillo"));

// never
// Representa el tipo de valor que nunca ocurren.
function error(mensaje: string): never {
    throw new Error(mensaje);
}

console.log(error("Error"));