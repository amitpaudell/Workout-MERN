import { useState } from 'react';

const WorkOutForm = () => {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch('http://localhost:4000/api/workouts/', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      console.log('new workout added', json);
      setError(null);
    }
  };
  return (
    <form action="" className="border-2 m-4 px-3" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>
      <label htmlFor="">Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border-1 m-3 "
      />
      <br></br>
      <label htmlFor="">Load</label>
      <input
        type="text"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className="border-1 m-3 "
      />{' '}
      <br></br>
      <label htmlFor="">Reps</label>
      <input
        type="text"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className="border-1 m-3 "
      />{' '}
      <br></br>
      <input className="bg-green-400 p-1 ml-8" type="submit" name="" id="" />
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkOutForm;
