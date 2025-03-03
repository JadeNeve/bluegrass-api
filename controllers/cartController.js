let cart = [];

const getCart = (req, res) => {
    res.json(cart);
};

const addToCart = (req, res) => {
    const { id, name, price, image } = req.body;
    cart.push({ id, name, price, image });
    res.json({ message: "Item added to cart", cart });
};

const removeFromCart = (req, res) => {
    const { id } = req.params;
    cart = cart.filter((item) => item.id !== parseInt(id));
    res.json({ message: "Item removed from cart", cart });
};

module.exports = { getCart, addToCart, removeFromCart };
