const express = require("express");
const router = express.Router();
const { Users } = require("../models");

router.post("/", async (req, res) => {
    const {username, password} = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        });
        res.json("Berhasil");
    })
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const user = await Users.findOne({ where: { username: username } });

    if (!user) {
        return res.json({ error: "User Tidak Ditemukan" });
    }

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            return res.json({ error: "Kata Sandi Salah" });
        }
    })
});

module.exports = router;