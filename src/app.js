const express = require("express");
const app = express();
let utils = require("../src/utils");

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

app.get("/random", (req, res) => {
    const rand = Math.floor(Math.random() * 10);
    return res.status(200).json({ value: rand });
});

app.get("/foo", (req, res) => {
    const rand = Boolean(Math.floor(Math.random() * 2));

    if (rand) {
        return res.status(200).json({ value: rand });
    } else {
        return res.status(501).json({ value: rand });
    }
});

app.get("/bar", (req, res) => {
    const rand = utils.trueOrfalse();

    if (rand) {
        return res.status(200).json({ value: rand });
    } else {
        return res.status(501).json({ value: rand });
    }
});



module.exports = app;