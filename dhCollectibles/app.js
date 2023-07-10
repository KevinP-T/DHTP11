async function main() {
    const importar = require("./collectibles");

    let hotToys = await importar("Hot Toys");
    let bandai = await importar("Bandai");
    let starWars = await importar("Star Wars");

    unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

    let collectibles = {
        figuras: unifiedCollectibles,
        listFigures: function () {
            for (let figura of unifiedCollectibles) {
                console.log("FIGURA");
                console.log(figura);
                console.log("------------------------------------");
            };
        },
        figuresByBrand: function (marca) {
            console.log("FIGURAS DE LA MARCA " + marca);
            console.log(unifiedCollectibles.filter(figura => figura["marca"] == marca));
        }
    }

    collectibles.listFigures();
    console.log("--------------------------------------------------");
    collectibles.figuresByBrand("Star Wars");
    console.log("--------------------------------------------------");
    collectibles.figuresByBrand("Bandai");
    console.log("--------------------------------------------------");
    collectibles.figuresByBrand("Hot Toys");
}

main();