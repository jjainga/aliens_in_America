const express = require("express");
const { sequelize } = require("../models");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models")
//console.log(db.details)
// GET all the quizzes name (GET all the quizzes)
router.get("/api/details", function (req, res) {
    db.details.findAll({}).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
});

// POST create a quiz name
router.post("/api/details", function (req, res) {
    //console.log(details)
    db.details.create({
        favorite_food: req.body.favorite_food,
        feeding_frequency: req.body.feeding_frequency,
        aggressive: req.body.aggressive
    }).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
});