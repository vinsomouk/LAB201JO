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

import ArrowImage from '../assets/Arrow.png';
import ArrowImage2 from '../assets/Arrow2.png';

const Container = styled.div`
  background-color: #f30000;
  width: 100vw;
  height: 100vh;
  position: absolute;
  align-items: flex-start;
  left: 0;
  text-align: center;
  overflow-x: hidden;
  padding: 20px;
  font-family: "Jockey";
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
font-family: "Jockey";
`;

const Title1 = styled.div`
margin-left: 6%;
margin-top: 2%;
margin-bottom: 10px;
color: #98D9EB;
font-family: "Jockey";
;
`;

const Title2 = styled.div`
margin-left: 6%;
margin-top: 2%;
margin-bottom: 10px;
color: #98D9EB;
font-family: "Jockey";
`;


const Slide = ({ imageUrl, alt }) => {
  return <img src={`${imageUrl}.png`} alt={alt} style={{ borderRadius: '10px' }} />;
};

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const NavBtn = styled.button`
  background-image: url(${ArrowImage2});
  background-size: 100px 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 200px;
  height: 200px;
  padding: 0;
`;

const NavBtnRight = styled.button`
  background-image: url(${ArrowImage});
  background-size: 100px 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 200px;
  height: 200px;
  padding: 0;
`;

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

  handleNavigate= (direction) => {
    const { goToSlide, slides } = this.state;
    const newSlide = direction === 'left' ? Math.max(0, goToSlide - 1) : Math.min(goToSlide + 1, slides.length - 1);
    this.setState({ goToSlide: newSlide });
  };

  render() {
    const { slidesCount } = this.state;
    let navigationButtons = null;
    if (this.state.showNavigation) {
      navigationButtons = (
        <NavigationButtons>
          <NavBtn onClick={() => this.handleNavigate('left')} />
          <NavBtnRight onClick={() => this.handleNavigate('right')} />
        </NavigationButtons>
      );
    }

    return (
        <Container>
<Titleflex>
        <Title1>DECOUVREZ LES {slidesCount} PARTICIPANTS AUX JO 2024 </Title1>
        <Title2>SECTION ESCRIMEUR ! </Title2>
        </Titleflex>
      <div style={{ width:"50%", height:"60vh", margin: "0 auto", borderRadius: "25px" }}>
      <Carousel
  slides={this.state.slides}
  goToSlide={this.state.goToSlide}
  offsetRadius={this.state.offsetRadius}
  showNavigation={false}
  animationConfig={this.state.config}
  width="100vw"
/>
{navigationButtons}
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