require('dotenv').config();

const express = require('express');
const workOutRoutes = require('./routes/workout');

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/workouts', workOutRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
