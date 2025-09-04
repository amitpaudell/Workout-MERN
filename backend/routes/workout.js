const express = require('express');

const router = express.Router();

const workOutController = require('../controllers/workoutController');

//GET all workouts
router.get('/', (req, res) => {
  res.json({ mssg: 'get all workouts' });
});

//GET a single workout
router.get('/:id', (req, res) => {
  res.json({ mssg: 'Get a single workout' });
});

//POST a new workout
router.post('/', workOutController.createWorkout);

//DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'Delete a workout' });
});

//Update a workout
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'Update a workout' });
});

module.exports = router;
