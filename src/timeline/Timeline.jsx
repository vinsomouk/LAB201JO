import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import { scroller } from 'react-scroll';
import BackGroundVideo from '../assets/VidéoPrésentation.mp4'
import { useSpring, animated } from 'react-spring';

import "./styles.css";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");


  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const timeline6 = useRef(null);
  
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);
  const circle6 = useRef(null);

  const handleScrollUp = () => {
    scroller.scrollTo('start', {
      duration: 800,
      delay: 0,
      smooth: true,
      containerId: 'timeline-container',
    });
    resetTimeline();
  };

  const someCallback = () => {
    setMessage1("1996");
    setText1("Médaille d’or individuel et en équipe d’escrime durant les Jo d’été")
    callback();
  };

  const someCallback2 = () => {
    setMessage2("1998-99");
    setText2("2 médailles d’or individuel et une médaille d’or durant les Championnats du monde")
    callback();
  };

  const someCallback3 = () => {
    setMessage3("2002-2004");
    setText3("Gagnante de la World cup Fencing durant 3 années consécutive")
    callback();
  };

  const someCallback4 = () => {
    setMessage4("2005-2008");
    setText4("Médaille d’or en équipe durant les Championnats du monde")
    callback();
  };

  const someCallback5 = () => {
    setMessage5("2017");
    setText5(" Laura est élue Ministre des sports et est chargée d’organiser les JO 2024")
    callback();
  };

  const someCallback6 = () => {
    setMessage6("2018");
    setText6("Elle lance une campagne contre les discriminations dans le monde sportif avec comme ambassadeur Antoine Griezman, Florent Manaudou et Estelle Mossely")
    callback();
  };

  useEffect(() => {
    setObserver(timeline1.current, someCallback);
    setObserver(timeline2.current, someCallback2);
    setObserver(timeline3.current, someCallback3);
    setObserver(timeline4.current, someCallback4);
    setObserver(timeline5.current, someCallback5);
    setObserver(timeline6.current, someCallback6);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
    setObserver(circle6.current, someCallback6);
  }, []);

  const resetTimeline = () => {
    setMessage1("");
    setMessage2("");
    setMessage3("");
    setMessage4("");
    setMessage5("");
    setMessage6("");
  };

  

  return (
    <div className="wrapper" onScroll={handleScrollUp}>
      <div id="timeline1" ref={timeline1} className="timeline"  />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle"  />
        <div
          className="message"
        >
          
          {message1}
          <div>{text1}</div>
        </div>
      </div>

      <div id="timeline2" style={{ marginTop: '20px' }} ref={timeline2} className="timeline"  />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle"  />
        <div
          className="message2"
          
        >
          
          {message2}
          <div>{text2}</div>
</div>
      </div>

      <div id="timeline3" style={{ marginTop: '20px' }} ref={timeline3} className="timeline"  />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle"   />
        <div
          className="message3"
          
        >
          
          {message3}
          <div>{text3}</div>
        </div>
      </div>

      <div id="timeline4" style={{ marginTop: '20px' }} ref={timeline4} className="timeline"  />
      <div className="circleWrapper">
<div id="circle4" ref={circle4} className="circle"   />
        <div
          className="message4">
        
         {message4}
         <div>{text4}</div> 
        </div>
      </div>

      <div id="timeline5" ref={timeline5} style={{ marginTop: '20px' }} className="timeline"  />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle"  />
        <div
          className="message5"
          
        >
          {message5}
          <div>{text5}</div>
        </div>
      </div>

      <div id="timeline6" ref={timeline6} style={{ marginTop: '20px' }} className="timeline"  />
      <div className="circleWrapper">
        <div id="circle6" ref={circle6} className="circle"  />
        <div
          className="message6"
          
        >
          {message6}
         <div>{text6} </div> 
        </div>
      </div>
      
    </div>
  );
};

export default function TimelineComponent() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="App">
      <div className="stub4">
  <video autoPlay loop muted>
    <source src={BackGroundVideo} type="video/mp4" />
  </video>
  <div className="image-container">
    <img src="../assets/Federation_francaise_descrime_logo.png" alt="Logo de la Fédération Française d'Escrime" />
  </div>
</div>

      <div className="stub3">PRENEZ GARDE ! L'ESCRIME VA VOUS SURPRENDRE</div>
      <div className="stub1">
        <p class="text-container">
        L'escrime est un sport de combat où deux adversaires
       s'affrontent avec des armes blanches flexibles, 
       c’est une discipline olympique depuis 1896. C’est dans cette discipline que l’athlète française Laura Flessel a excellé.
        </p>
        </div>
      <TimelineObserver
  initialColor="#e5e5e5"
  fillColor="red"
  handleObserve={(setObserver) => (
    <Timeline
      callback={onCallback}
      className="timeline"
      setObserver={setObserver}
    />
  )}
  reverse={false} 
/>
      <div className="stub2">{message}</div>
    </div>
  );
}