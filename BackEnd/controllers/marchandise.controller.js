const MarchandiseModel = require("../models/marchandise.model");
let marchandises = [
    new MarchandiseModel(0, "pomme", 1, 1),
    new MarchandiseModel(1, "peche", 2, 1)
];

module.exports.getMarchandises = async (req, res) => {
    /* const marchandises = await MarchandiseModel.find();
    res.status(200).json(marchandises); */
    res.json(marchandises);
};

module.exports.setMarchandises = async (req, res) => {
    // logique pour marchandise à mettre en place
    /* if (!req.body.id && !req.body.nom && !req.body.prix && !req.body.volume) {
        res.status(400).json({ message: "Merci d'ajouter les éléments suivants : id, nom, prix, volume" });
    }
    const post = await MarchandiseModel.create({
        id: req.body.id,
        nom: req.body.nom,
        prix: req.body.prix,
        volume: req.body.volume
    });
    res.status(200).json(post); */
    if (!req.body.id || !req.body.nom || !req.body.prix || !req.body.volume) {
        res.status(400).json({ message: "Merci d'ajouter les éléments suivants : id, nom, prix, volume" });
    }
    else {
        if (!Number.isInteger(parseInt(req.body.id)) || !Number.isInteger(parseInt(req.body.prix)) || !Number.isInteger(parseInt(req.body.volume))) {
            res.status(400).json({ message: "Merci d'ajouter de mettre des nombres pour l'id, le prix et le volume" });
        } else {
            const marchandise = new MarchandiseModel(parseInt(req.body.id), req.body.nom, parseInt(req.body.prix), parseInt(req.body.volume));
            marchandises.push(marchandise);
            res.status(200).json({ message: "Bien ajoutée" });
        }
    }
};

module.exports.editMarchandise = async (req, res) => {
    /* const marchandise = await MarchandiseModel.findById(req.params.id);
    if (!marchandise) {
        res.status(400).json({ message: "Marchandise non trouvée" });
    }

    const updateMarchandise = await MarchandiseModel.findByIdAndUpdate(
        marchandise,
        req.body,
        { new: true }
    );
    res.status(200).json(updateMarchandise); */
    if (!req.body.nom || !req.body.prix || !req.body.volume) {
        res.status(400).json({ message: "Merci d'ajouter les éléments suivants : nom, prix, volume" });
    }
    else {
        if (!Number.isInteger(parseInt(req.params.id)) || !Number.isInteger(parseInt(req.body.prix)) || !Number.isInteger(parseInt(req.body.volume))) {
            res.status(400).json({ message: "Merci d'ajouter de mettre des nombres pour l'id, le prix et le volume" });
        } else {
            const marchandise = marchandises.find(m => m.id == parseInt(req.params.id));
            marchandise.nom = req.body.nom;
            marchandise.prix = parseInt(req.body.prix);
            marchandise.volume = parseInt(req.body.volume);
            res.status(200).json({ message: "Bien modifier" });
        }
    }
};

module.exports.deleteMarchandise = async (req, res) => {
    /* const marchandise = await MarchandiseModel.findById(req.params.id);
    if (!marchandise) {
        res.status(400).json({ message: "Marchandise non trouvée" });
    }

    await marchandise.remove();
    res.status(200).json({ message: "Marchandise supprimée " + req.params.id }); */
    if (!Number.isInteger(parseInt(req.params.id))) {
        res.status(400).json({ message: "Merci d'ajouter de mettre des nombres pour l'id" });
    } else {
        const i = marchandises.findIndex(m => m.id == parseInt(req.params.id));

        if (i === -1) {
            res.status(400).json({ message: "Marchandise non trouvée dans la liste" });
        }
        else {
            marchandises.splice(i, 1);
            res.status(200).json({ message: "Bien supprimer" });
        }
    }
};