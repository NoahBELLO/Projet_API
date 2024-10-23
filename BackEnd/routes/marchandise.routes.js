const express = require('express');
const {setMarchandises, getMarchandises,editMarchandise, deleteMarchandise} = require("../controllers/marchandise.controller");
const router = express.Router();

router.get("/", getMarchandises);
router.post("/", setMarchandises);
router.put("/:id", editMarchandise);
router.delete("/:id", deleteMarchandise);

/* router.patch("/like-post/:id", (req, res) => {
    res.json({ message: "Post liké : id = " + req.params.id });
}); 

router.patch("/dislike-post/:id", (req, res) => {
    res.json({ message: "Post disliké : id = " + req.params.id });
}); */

module.exports = router;