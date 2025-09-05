const WorkOut = require('../models/workoutModel');
const mongoose = require('mongoose');

//get all workout
exports.getWorkOuts = async (req, res) => {
  const workouts = await WorkOut.find({}).sort({ createAt: -1 });

  res.status(200).json(workouts);
};

//get a single workout

exports.getWorkOut = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Not such workout ' });
  }

  const workout = await WorkOut.findById(id);
  if (!workout) {
    return req.status(404).json({ error: 'No such workouts' });
  }

  res.status(200).json(workout);
};

//create a new workout
exports.createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  //add doc to db
  try {
    const workout = await WorkOut.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ mssg: 'POST a new workout' });
};

//delete a workout
exports.deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Not such workout ' });
  }

  const workout = await WorkOut.findOneAndDelete({ _id: id });

  if (!workout) {
    return req.status(400).json({ error: 'No such workouts' });
  }

  res.status(200).json(workout);
};

//update a workout
exports.updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such workout' });
  }
  const workout = await WorkOut.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return req.status(400).json({ error: 'No such workouts' });
  }

  res.status(200).json(workout);
};
