
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const cors = require("cors");



require("dotenv").config();

const User = require("./models/User");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB prisijungė");
    })
    .catch((error) => {
        console.log("MongoDB klaida:", error);
    });

// Registracija
app.post("/auth/register", async (req, res) => {

    try {
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Paskyra sukurta"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Klaida registruojant vartotoją"
        });
    }
});

app.post("/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Neteisingas el. paštas arba slaptažodis"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Neteisingas el. paštas arba slaptažodis"
            });
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Prisijungimas sėkmingas",
            token
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Klaida prisijungiant"
        });
    }
});

// Vartotojo profilis
app.get("/auth/profile", async (req, res) => {
    try {
        const authHeader = req.headers.authorization;

        // Patikriname, ar yra Authorization antraštė
        if (!authHeader) {
            return res.status(401).json({
                message: "Nėra tokeno"
            });
        }

        // Ištraukiame tokeną iš "Bearer TOKEN"
        const token = authHeader.split(" ")[1];

        // Patikriname JWT
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Randame vartotoją pagal JWT esantį userId
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({
                message: "Vartotojas nerastas"
            });
        }

        // Grąžiname vartotojo informaciją
        res.json({
            name: user.name,
            email: user.email
        });

    } catch (error) {
        console.log(error);

        res.status(401).json({
            message: "Neteisingas arba pasibaigęs tokenas"
        });
    }
});
server.js


app.get("/", (req, res) => {
    res.send("Serveris veikia");
});


app.listen(PORT, () => {
    console.log(`Serveris veikia: http://localhost:${PORT}`);
});