const fs = require("fs");
let lista = [];
const colecao = "pessoas";
module.exports.colecao = colecao;
lista = JSON.parse(fs.readFileSync(colecao + ".json"));

module.exports.lista = () => {
    return lista;
}

module.exports.porId = (id) => {
    let i = lista.find(item => item.id == id);
    if (i) {
        return i;
    }
    return {};
}
