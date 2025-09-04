const WorkOut = require('../models/workoutModel');

//get all workout
exports.getWorkOuts = async (req, res) => {
  const workouts = await WorkOut.find({}).sort({ createAt: -1 });

  res.status(200).json(workouts);
};

//get a single workout

exports.getWork;

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

//update a workout
