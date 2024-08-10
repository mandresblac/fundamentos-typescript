/* 
¿Qué es una interfaz?
En palabras poco técnicas una interfaz es como una especie de molde para nuestro datos. No debemos confundir el término con la UI de una app, en este caso el concepto de interfaz se relaciona más con la estructura de los datos de nuestro software. Por ejemplo:
*/

interface Person {
  id:number;
  nombre: string;
  apellido: string;
  edad: number;
  esSoltero: boolean;
}

interface Perro {
  id:number | string;
  nombre: string;
  color: string[];
  raza:string;
  sexo: "Macho" | "Hembra"
}

interface Vehiculo {
  placa:string;
  color: string;
  ruedas: number;
  puertas: number;
  marca: string;
  esNuevo: boolean;
}

/* 
En este caso, tenemos 3 interfaces: Persona, Perro, Vehiculo. Cada una de ellas se declara con la palabra reservada interface seguido del nombre de la interfaz (en Pascal Case) y entre llaves todas las propiedades con sus tipos de datos separadas por ;.
*/

/* Interfaz como tipo de dato */
// Las interfaces se usan como tipos de datos personalizables, con los ejemplos anteriores podríamos crear objetos de la siguiente manera:

const pedro: Person = {
  id:1,
  nombre:"Pedro",
  apellido:"Sanchez",
  edad:36,
  esSoltero:true,
}

// Nuestro objeto pedro es de tipo Person, por ende debe tener OBLIGATORIAMENTE todas las variables declaradas en Persona.

/* 
El contrato de una Interfaz

En el ejemplo anterior se dice que pedro cumple el contrato de Persona puesto que tiene todos los datos declarados de manera correcta: id, nombre, apellido, edad, esSoltero. Si faltara un dato podríamos decir que pedro no cumple con el contrato de Persona puesto que mínimamente debería incluir todos los datos de la interfaz.
*/


/* Propiedades opcionales */
// Las interfaces al igual que las funciones soportan valores opcionales con el operador ?

interface Vehiculo2 {
  placa:string;
  color: string;
  marca: string;
  esNuevo: boolean;
  ruedas?: number;
  puertas?: number;
}

const hilux: Vehiculo2 = {
  placa: 'HYK-256',
  color: 'rojo',
  marca: 'Toyota',
  esNuevo: true,
}

// La variable hilux es de tipo Vehiculo2 pero tanto ruedas como puertas son propiedades opcionales, por ello al crear el objeto y no incluir esos valores no tenemos ningún error.


/* Propiedades de solo lectura */
// Con la palabra reservada "readonly" podemos especificar las propiedades que solo son de lectura y que no podremos cambiar:

interface Perro2 {
  id:number | string;
  readonly nombre: string;
  color: string[];
  raza:string;
  sexo: "Macho" | "Hembra"
}

// nombre es de solo lectura

const boby: Perro = {
  id: "125-boby",
  nombre: "Boby",
  color: ["cafe","blanco"],
  raza:"cooker",
  sexo: "Macho"
}

boby.raza = "pastor aleman";
console.log(boby)
boby.nombre = "Rufo"
console.log(boby)

// Si intentamos cambiar la raza del objeto boby no hay problema, pero si hacemos lo mismo con nombre nos dará un error: Cannot assign to 'nombre' because it is a read-only property.

/* Herencia de interfaces */
// Usando la palabra "extends" podemos heredar interfaces:

interface Vehiculo3 {
  placa:string;
  color: string;
  ruedas?: number;
  puertas?: number;
  marca: string;
  esNuevo: boolean;
}

interface Bicicleta extends Vehiculo3 {
  esMontañera: boolean;
  traccion: number;
}

const miBici: Bicicleta = {
  placa: '123-abc',
  color: 'negro',
  marca: 'Santusa',
  esNuevo: true,
  esMontañera:true,
  traccion: 21,
}

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