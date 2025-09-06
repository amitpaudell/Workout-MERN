import { useEffect, useState } from 'react';

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
  return (
    <div>
      <h1 className="text-5xl">Home</h1>
      {workouts &&
        workouts.map((workout) => {
          return <p key={workout._id}>{workout.title}</p>;
        })}
    </div>
  );
};

export default Home;
