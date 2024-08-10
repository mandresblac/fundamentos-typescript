/* 
Basta con igualar el parámetro al valor que deseamos. Si al llamar la función este parámetro no recibe valor entonces tomará el valor por defecto.
*/

function getUser(nombre: string, cuenta: string, foto="http://mi-photo-por-defecto"): string {
  if(foto){
    return `El usuario ${nombre} tiene cuenta ${cuenta} y foto ${foto}`
  }
  return `El usuario ${nombre} tiene cuenta ${cuenta}`
}

console.log(getUser("Cris", "basic", "http://mi-photo"))
console.log(getUser("Fernando", "premium"))

// Ahora si no pasamos nada al parámetro foto tomara el valor por defecto "http://mi-photo-por-defecto".


/* 
Orden de los parámetros:

El orden sí importa, por eso se recomienda escribir los parámetros de una funcion en el siguiente orden:

Primero: Parámetros obligatorios
Segundo: Parámetros opcionales ?
Último: Parámetros por defecto (siempre al final)

Esto hará que las funciones no se rompan a largo plazo haciendo más mantenible el código escrito, por ejemplo:
*/

function imprimirDatos(nombre: string, edad?: number, peso: number = 50 ){
  //...
}


/* 
Conclusiones
- Para usar un parámetro opcional debemos emplear ? como en Node.
- Para usar un parámetro por defecto solo igualamos al valor que deseamos.
- El orden de los parámetros importa.
*/