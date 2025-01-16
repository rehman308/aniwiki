const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2, maxlength: 50 },
    category: {
        type: String,
        enum: ["animal", "fish", "insect"],
        required: true,
    },
    life: { type: Number, required: true, min: 1 },
    diet: { type: String, required: true },
    habitat: { type: String, required: true },
    description: { type: String, required: true, minlength: 20 },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
});

module.exports = mongoose.model("Item", itemSchema);
