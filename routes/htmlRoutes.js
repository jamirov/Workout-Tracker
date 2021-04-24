const router = require("express").Router();
const db = require("../models");
const express = require("express");
const mongoose = require("mongoose");
var path = require("path");


router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
  
  
router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});



module.exports = router;

