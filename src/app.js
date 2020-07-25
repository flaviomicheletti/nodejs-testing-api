//app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

app.get("/random", (req, res) => {
    const rand = Math.floor(Math.random() * 10);
    return res.status(200).json({ value: rand });
});

app.get("/foo", (req, res) => {
    const rand = Math.random();
    res.status(200).json({value: rand});

    // if (rand) {
    // } else  {
    //     res.status(400).json({value: rand});
    // }
});

module.exports = app;