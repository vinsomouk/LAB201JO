// DashBoard.jsx
import React, { useEffect, useState } from 'react';
import { getSlidesCount, updateSlidesCount } from '../database/Database';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const DashBoard = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getCount = async () => {
      const count = await getSlidesCount();
      setCount(count);
      localStorage.setItem('slidesCount', count);
    };
    getCount();
  }, []);

  const addSlide = () => {
    const newCount = count + 1;
    updateSlidesCount(newCount);
    setCount(newCount);
    localStorage.setItem('slidesCount', newCount);
  };

  const removeSlide = () => {
    if (count > 1) {
      const newCount = count - 1;
      updateSlidesCount(newCount);
      setCount(newCount);
      localStorage.setItem('slidesCount', newCount);
    }
  };

  const user = auth.currentUser;

  if (!user || user.email!== 'diakitekhalidou1@gmail.com') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h2>Slide Manager</h2>
      <p>Current number of slides: {count}</p>
      {count > 0 && (
        <>
          <button onClick={addSlide}>Add Slide</button>
          <button onClick={removeSlide}>Remove Slide</button>
          <img src="../assets/Enzo.png" alt="" />
        </>
      )}
    </div>
  );
};

export default DashBoard;