const WorkOutDetails = ({ workout, onDelete }) => {
  const handleClick = async () => {
    const response = await fetch(
      `http://localhost:4000/api/workouts/${workout._id}`,
      {
        method: 'DELETE',
      }
    );

    const json = await response.json();
    if (response.ok) {
      console.log('Workout deleted  ');
      onDelete(workout._id);
    }
  };
  return (
    <div className="m-4 border-3 p-7">
      <h4 className="text-3xl font-medium text-red-600">{workout.title}</h4>
      <p className="text-xl">
        <strong>Load(kg): </strong>
        {workout.load}
      </p>
      <p className="text-xl">
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{new Date(workout.createdAt).toLocaleString()}</p>

      <span onClick={handleClick}>DELETE</span>
    </div>
  );
};

export default WorkOutDetails;
