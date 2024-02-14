import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../features/greetingSlice';

const Greeting = () => {
  const greeting = useSelector((store) => store.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  if (greeting.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Random Greetings</h1>
      <h2>{greeting.greeting.message}</h2>
    </div>
  );
}

export default Greeting;