// Caroussel.js
import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { config } from "react-spring";
import EnzoImage from '../assets/Enzo.png';
import ManonImage from '../assets/Manon.png';
import MaximImage from '../assets/Maxim.png';
import JulienImage from '../assets/Julien.png';
import CeciliaImage from '../assets/Cecilia.png';
import SaraImage from '../assets/Sara.png';

const Container = styled.div`
  background-color: #000000;
  width: 100%;
  height: 100vh;
  position: relative;
  align-items: flex-start; 
  text-align: center;
`;

const Titleflex = styled.div`
font-size: 60px;
font-weight: bold;
color: white;
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-content: stretch;
align-items: baseline;
`;


const Title1 = styled.div`
margin-left: 6%;
margin-top: 2%;
margin-bottom: 10px;
`;

const Title2 = styled.div`
`;

const Slide = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Slide" />;
};

export default class Caroussel extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
    slides: [
      {
        key: uuidv4(),
        content: <Slide imageUrl={EnzoImage} alt="Slide 1" />,
      },
      {
        key: uuidv4(),
        content: <Slide imageUrl={ManonImage} alt="Slide 2" />,
      },
      {
        key: uuidv4(),
        content: <Slide imageUrl={MaximImage} alt="Slide 3" />,
      },
      {
        key: uuidv4(),
        content: <Slide imageUrl={JulienImage} alt="Slide 4" />,
      },
      {
        key: uuidv4(),
        content: <Slide imageUrl={CeciliaImage} alt="Slide 5" />,
      },
      {
        key: uuidv4(),
        content: <Slide imageUrl={SaraImage} alt="Slide 6" />,
      },
    ],
    slidesCount: localStorage.getItem('slidesCount') || 0,
  };

  render() {
    const { slidesCount } = this.state;

    return (
        <Container>
<Titleflex>
        <Title1>Escrimeurs participants aux JO : {slidesCount}</Title1>
        </Titleflex>
      <div style={{ width: "50%", height: "60vh", margin: "0 auto" }}>
      <Carousel
        slides={this.state.slides}
        goToSlide={this.state.goToSlide}
        offsetRadius={this.state.offsetRadius}
        showNavigation={this.state.showNavigation}
        animationConfig={this.state.config}
      />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          
        </div>
      </div>
      </Container>
    );
  }
}