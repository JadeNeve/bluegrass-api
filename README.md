# Bluegrass API (Node.js + Express)

This is a simple API built using Node.js and Express for managing products and a shopping cart. It serves as a backend for the React Native Bluegrass app.

## Features
- Fetch product listings (with optional category filtering)
- Add and remove items from the shopping cart
- Uses in-memory storage for the cart (can be replaced with a database)

## Technologies Used
- Node.js
- Express.js
- CORS (to allow frontend access)
- dotenv (to manage environment variables)

## Setup & Installation

### **1. Clone the repository**
```sh
git clone https://github.com/JadeNeve/bluegrass-api.git
cd bluegrass-api
```

### **2. Install dependencies**
```sh
npm install
```

### **3. Create a `.env` file (optional)**
If you want to specify a custom port, create a `.env` file in the root directory and add:
```
PORT=5000
```

### **4. Start the server**
```sh
npm start
```
The API will run at `http://localhost:5000`.

---

## API Endpoints

### **Products**
#### **Get all products**
```sh
GET /api/products
```
Example Response:
```json
[
  {
    "id": 1,
    "name": "Wagyu Steak Medallions",
    "category": "Beef",
    "image": "https://example.com/images/wagyu_steak.jpg",
    "price": 120.99
  }
]
```

#### **Filter products by category**
```sh
GET /api/products?category=Beef,Fish
```

---

### **Cart**
#### **Get cart items**
```sh
GET /api/cart
```

#### **Add item to cart**
```sh
POST /api/cart/add
Content-Type: application/json
```
Body:
```json
{
  "id": 1,
  "name": "Wagyu Steak Medallions",
  "price": 120.99,
  "image": "https://example.com/images/wagyu_steak.jpg"
}
```

#### **Remove item from cart**
```sh
DELETE /api/cart/remove/1
```

---

## Debugging & Troubleshooting

### **1. Cannot GET `/products`?**
If you see this error, ensure you are using the correct endpoint:
```
http://localhost:5000/api/products
```

### **2. Check if the server is running**
Run:
```sh
npm start
```
Expected output:
```
Server running on port 5000
```
If the server crashes, check for errors in the terminal.

### **3. Test if Express is working**
Add this route in `server.js`:
```js
app.get("/", (req, res) => {
    res.send("API is running...");
});
```
Then visit:
```
http://localhost:5000/
```

### **4. Verify Product Routes are Set Up Correctly**
Ensure `routes/products.js` contains:
```js
const express = require("express");
const router = express.Router();
const { getProducts } = require("../controllers/productsController");

router.get("/", getProducts);

module.exports = router;
```

### **5. Debugging `getProducts` Controller**
Modify `controllers/productsController.js` to log requests:
```js
const products = require("../data/products.json");

const getProducts = (req, res) => {
    console.log("Fetching products...");  // Debugging line
    res.json(products);
};

module.exports = { getProducts };
```
Restart the server:
```sh
Ctrl + C  # Stop the server
npm start
```