const express = require("express");
const router = require("express").Router();
const Workout = require("../models/Workout.js");
var path = require("path");


router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(workouts => {
      console.log(workouts);
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

// router.put("/api/workouts/:id", (req, res) => {
//   console.log(req);
//   Workout.updateOne({ _id: req.body.id }, { $set: { exercises: req.body } }, { new: true })
//     .then(workouts => {
//       res.json(workouts);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });
router.put('/api/workouts/:id', (req, res) => {
  Workout.updateOne({ _id: req.params.id }, { $set: { exercises: req.body } }, { new: true })
      .then(dbWorkout => {
          res.json(dbWorkout);
      })
      .catch(err => {
          res.status(400).json(err);
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
  Workout.find({})
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