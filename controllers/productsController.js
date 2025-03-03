const products = require("../data/products.json");

// Fetch products with optional category filtering
const getProducts = (req, res) => {
    let { category } = req.query;

    let filteredProducts = products;

    if (category) {
        const categories = category.split(","); // Allow multiple categories
        filteredProducts = products.filter((product) =>
            categories.includes(product.category)
        );
    }

    res.json(filteredProducts);
};

module.exports = { getProducts };
