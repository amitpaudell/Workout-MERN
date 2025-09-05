const express = require('express');

const router = express.Router();

const workOutController = require('../controllers/workoutController');

//GET all workouts
router.get('/', workOutController.getWorkOuts);

//GET a single workout
router.get('/:id', workOutController.getWorkOut);

//POST a new workout
router.post('/', workOutController.createWorkout);

//DELETE a workout
router.delete('/:id', workOutController.deleteWorkout);

//Update a workout
router.patch('/:id', workOutController.updateWorkout);

module.exports = router;
