const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import routes
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes); // Optional cart routes

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
