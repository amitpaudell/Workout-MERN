import { useEffect, useState } from 'react';
import WorkOutDetails from '../components/WorkOutDetails';
import WorkOutForm from '../components/WorkOutForm';
const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts/');
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);

  const handleDeleteWorkout = (id) => {
    setWorkouts((prevWorkouts) =>
      prevWorkouts.filter((workout) => workout._id !== id)
    );
  };
  return (
    <div>
      <h1 className="text-5xl">Home</h1>
      <div>
        {workouts &&
          workouts.map((workout) => {
            return (
              <WorkOutDetails
                key={workout._id}
                workout={workout}
                onDelete={handleDeleteWorkout}
              ></WorkOutDetails>
            );
          })}
      </div>

      <div>
        <WorkOutForm></WorkOutForm>
      </div>
    </div>
  );
};

export default Home;
