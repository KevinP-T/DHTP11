const arrayNumeros = [1, 10, 5, 4, 6, 2, 8, 7, 3, 25];
const [posCero, , posDos, , posCuatro] = arrayNumeros;
arrayNumeros = arrayNumeros.filter(num => num != posCero && num != posDos && num != posCuatro);
const nuevoArray = [...arrayNumeros];

console.log("Nuevo array: ", nuevoArray, " Numeros sacados: ", posCero, posDos, posCuatro);

const mascota = {
    nombre: "Titan",
    tipoMascota: "Perro",
    color: "marron",
    raza: "Doberman"
};

let { nombre, tipoMascota, color, raza } = mascota;

console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoMascota}, de
color: ${color} y su raza es: ${raza}.`);