const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);

//Use un promisify para poder sacar los datos en una variable de manera asincronica
//Ya que la lectura de archivos en JS es de manera sincrona
async function importar(marca) {
    switch (marca){
        case "Hot Toys":
            path = "./datos/figuras1.json";
            break;
        case "Bandai":
            path = "./datos/figuras2.json";
            break;
        case "Star Wars":
            path = "./datos/figuras3.json";
            break;
        default:
            path = "Error en el path"
    }
    console.log(path);
    //El uso de "await" es el que logra recolectar la data y poder escribirla sobre una variable
    const data = await readFileAsync(path, "utf8");
    const arrayJson = JSON.parse(data);
    let arrayToExport = [];
    for (let index = 0; index < arrayJson.length; index++) {
        arrayToExport.push(arrayJson[index]);
    }
    return arrayToExport;
}

//Exportamos la funcion para usarla como modulo propio
module.exports = importar;
