const express = require("express");
const app = express();
const PORT = 3000;

const products = require("./products.js");

app.use(express.json());

// GET
app.get("/", (req, res) => {
  res.send(products);
});

// POST
app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.send(products);
});

// PUT
app.put("/products/:id", (req, res) => {
  products.forEach((product) => {
    if (product.id === parseInt(req.params.id)) {
      product.item = req.body.item ? req.body.item : product.item;
      product.price = req.body.price ? eq.body.price : product.price;
      res.send(products);
    }
  });
});

// DELETE
app.delete("/products/:id", (req, res) => {
  res.send(
    products.filter((product) => product.id !== parseInt(req.params.id))
  );
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
