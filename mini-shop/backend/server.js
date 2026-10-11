const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/Product");
const Category = require("./models/Category");




require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB prisijungė");



    app.listen(process.env.PORT, () => {
      console.log(`Serveris veikia: http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB klaida:", error.message);


  });











app.post("/products", async (req, res) => {

    console.log(req.body);
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});





app.get("/", (req, res) => {
  res.send("Mini Shop backend veikia!");
});


app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Prekė nerasta" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.post("/categories", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/categories/seed", async (req, res) => {
  try {
    const categories = [
      "Tradiciniai aviliai",
      "Aukštiniai mediniai aviliai",
      "Aukštiniai polistireniniai aviliai",
      "Rėmeliai ir vaškuolės",
      "Avilių elementai",
      "Papildomos avilių dalys",
      "Bičių duonelės ir žiedadulkių tvarkymas",
      "Avilių pervežimo priemonės",
      "Spiečių tvarkymas",
      "Motinėlių priežiūra ir veisimas",
      "Įnagiai",
      "Dūminės",
      "Apranga",
      "Atakiavimas",
      "Medsukiai",
      "Medaus košimas",
      "Medaus tvarkymas",
      "Medaus išpilstymas",
      "Bičių stebėjimas",
      "Maitinimas",
      "Gydymo priemonės",
      "Vaško lydimas",
      "Literatūra",
      "Skanėstai",
      "Kūno priežiūra",
      "Suvenyrai",
      "Maisto papildai ir gydomieji preparatai",
      "Žvakių gamyba",
      "Vaškinės žvakės ir formos"
    ];





    for (const name of categories) {
      await Category.updateOne(
        { name: name },
        { $set: { name: name } },
        { upsert: true }
      );
    }

    res.json({
      message: "Visos kategorijos įkeltos",
      kiekis: categories.length
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});












app.put("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

if (!product) {
      return res.status(404).json({ message: "Prekė nerasta" });
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


app.delete("/categories/:id", async (req, res) => {
  try {
    const category = await Category.findOneAndDelete({
      _id: req.params.id
    });

    if (!category) {
      return res.status(404).json({
        message: "Kategorija nerasta"
      });
    }

    res.json({
      message: "Kategorija ištrinta",
      category
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});





app.put("/categories/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!category) {
      return res.status(404).json({
        message: "Kategorija nerasta"
      });
    }

    res.json(category);

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});










app.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


