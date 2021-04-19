const router = require("express").Router();
const db = require("../models");
const express = require("express");
const mongoose = require("mongoose");

console.log(" Routes connected");

router.get("/", (req, res) => {
    console.log(" Routes connected");
    db.workouts.find()
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  



  module.exports = router;