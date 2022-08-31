const express = require("express");
const { sequelize } = require("../models");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models")
console.log(db.aliens)
// GET all the quizzes name (GET all the quizzes)
router.get("/api/aliens", function (req, res) {
    db.aliens.findAll({}).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
});

// POST create a quiz name
router.post("/api/aliens", function (req, res) {
    //console.log(Aliens)
    db.aliens.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        type: req.body.type,
        birthYear: req.body.birthYear
    }).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
});


module.exports = router;