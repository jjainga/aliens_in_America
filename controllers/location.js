const express = require("express");
const { sequelize } = require("../models");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models")
//console.log(db.location)
// GET all the quizzes name (GET all the quizzes)
router.get("/api/location", function (req, res) {
    db.location.findAll({}).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
});

// POST create a quiz name
router.post("/api/location", function (req, res) {
    //console.log(location)
    db.location.create({
        current_location: req.body.current_location,
        state: req.body.state,
        country: req.body.country,
        occupation: req.body.occuptation
    }).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
});