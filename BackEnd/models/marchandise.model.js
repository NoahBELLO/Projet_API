/* const mongoose = require("mongoose");
const marchandiseSchema = mongoose.Schema(
    {
        id: { type: Number },
        nom: { type: String },
        prix: { type: Number },
        volume: { type: Number }
    }
    // { timestamps: true } //pour avoir les dates de création et de modification
);

module.exports = mongoose.model("Marchandise", marchandiseSchema); */

class Marchandise {
    constructor(id, nom, prix, volume) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.volume = volume;
    }
}

module.exports = Marchandise;