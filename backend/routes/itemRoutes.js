const express = require("express");
const multer = require("multer");
const Item = require("../models/Item");

const router = express.Router();

// File Upload Configuration
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Endpoints
// Homepage
router.get("/", async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

router.get("/:category", async (req, res) => { 
    const { category } = req.params;
    const items = await Item.find({ category });  
    res.json(items);
});

router.get("/item/:id", async (req, res) => {
    const { id } = req.params;
    const item = await Item.findById(id);
    res.json(item);
});

router.post("/", upload.single("image"), async (req, res) => {
    const { name, category, life, diet, habitat, description } = req.body;
    const image = req.file ? req.file.path : "";
    const newItem = new Item({
        name,
        category,
        life,
        diet,
        habitat,
        description,
        image,
        imageAlt: name,
    });
    await newItem.save();
    res.status(201).json(newItem);
});

router.put("/:id", upload.single("image"), async (req, res) => {
    const { id } = req.params;
    const { name, category, life, diet, habitat, description } = req.body;
    const image = req.file ? req.file.path : undefined;

    const updatedItem = await Item.findByIdAndUpdate(
        id,
        {
            name,
            category,
            life,
            diet,
            habitat,
            description,
            ...(image && { image }),
        },
        { new: true }
    );
    res.json(updatedItem);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.json({ message: "Item deleted successfully" });
});

module.exports = router;
