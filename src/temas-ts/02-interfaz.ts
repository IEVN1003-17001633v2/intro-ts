interface Alumno{
    nombre:string;
    edad:number;
    email:string;
    calificacion?:number;
}

const alumno:Alumno={
    nombre: 'Drimzzy',
    edad: 25,
    email: 'uriel@gmail.com',
}

console.table(alumno);

let mascotas=['perro','gato','perico']
mascotas[1]='nuevo Gato'
mascotas.push('leon');
console.log(mascotas);

let tem:(string|number)[]=[];
tem.push(11);
tem.push('hola');
console.log(tem);