import React from 'react';
import TimelineComponent from '../timeline/Timeline';
import Caroussel from "../OlympicsCards/Caroussel";


import './index.css';

const Home = () => {
  return (
    <div className="carousel-container">
      <TimelineComponent/>
      <Caroussel/>
      
    </div>
  );
};

export default Home;