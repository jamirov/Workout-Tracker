const express = require("express");
const router = require("express").Router();
const Workout = require("../models/Workout.js");
var path = require("path");


router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration',
            },
        },
    },
])
  
  // Workout.find({})
    .then(workouts => {
      console.log(workouts);
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});


router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(workouts => {
      console.log(workouts);
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration',
            },
        },
    },
])
    .sort({ 'day': -1 })
    .limit(7)
    .then(workouts => {
      console.log(workouts);
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});





module.exports = router;