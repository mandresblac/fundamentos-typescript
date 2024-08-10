/* Cuando usamos uniones de tipos "|" el código suele volverse más verboso de lo que debería, para ello podemos usar Type Aliases para crear nuestros propios tipos de datos y luego solo asignarlos. */

// La sintaxis de los Type aliases es muy sencilla, usamos la palabra reservada type:
// type nombreDelAlias = unionDeTipos;

// Veamos algunos ejemplos:

// Para un arreglo, en vez de esto:
const arreglo: (number | string)[] = ["Hola mundo", 1, 2, 3, 4,];

// podemos hacer esto:
type ArregloStringONumero = string | number;
const arreglo2: (ArregloStringONumero)[] = [1,2,3, "Hola mundo"];

// Para un objeto podríamos hacer algo como:
type Persona = {
  id: number | string,
  nombre: string,
  telefono: number | string,
}

const persona1: Persona = {
  id: "1",
  nombre: "Carlos",
  telefono: "97-5301-448",
};

// Y para una función:
type StringONumber = string | number;

function concatenarOSumar(valor1: StringONumber, valor2: StringONumber): StringONumber {
  let isString = typeof valor1 === "string" && typeof valor2 === "string";
  let resultado;
  if(isString){
    resultado = valor1.toString() + " " + valor2.toString();
  }else{
    resultado = Number(valor1) + Number(valor2);
  }
  return resultado;
}

console.log(concatenarOSumar("Carlos", "Ramirez")) // "Carlos Ramirez"
console.log(concatenarOSumar(2, 9)); // 11

// Para concluir, podemos usar también el operador type para declarar constantes de la siguiente manera:
type DiasSemana = "Lunes" | "Martes" | "Miecoles" | "Jueves" | "Viernes" | "Sabado" | "Domingo";

// Arrow function
const esDiaLaboral = (dia: DiasSemana): string => {
  if (dia !== "Domingo" && dia !== "Sabado") {
    return "Dia laboral.";
  }
  else { 
    return "Fin de Semana.";
  }
}
console.log(esDiaLaboral("Martes"));
console.log(esDiaLaboral("Viernes"));
console.log(esDiaLaboral("Sabado"));
console.log(esDiaLaboral("Domingo"));
