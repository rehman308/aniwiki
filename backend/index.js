const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const itemRoutes = require("./routes/itemRoutes");

// Middleware
app.use(
    cors({
        origin: ["http://localhost:5000", "http://192.168.0.100:5000"],
    })
);
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/items", itemRoutes);

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
