import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import { scroller } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

import "./styles.css";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [direction1, setDirection1] = useState(null);
  const [message2, setMessage2] = useState("");
  const [direction2, setDirection2] = useState(null);
  const [message3, setMessage3] = useState("");
  const [direction3, setDirection3] = useState(null);
  const [message4, setMessage4] = useState("");
  const [direction4, setDirection4] = useState(null);
  const [message5, setMessage5] = useState("");
  const [direction5, setDirection5] = useState(null);
  const [message6, setMessage6] = useState("");
  const [direction6, setDirection6] = useState(null);

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

  const someCallback = (direction) => {
    if (direction === 'up') {
      setMessage1("");
    } else {
      setMessage1("1996");
    }
    setDirection1(direction);
    callback();
  };

  const someCallback2 = (direction) => {
    if (direction === 'up') {
      setMessage2("");
    } else {
      setMessage2("1998-99");
    }
    setDirection2(direction);
  };

  const someCallback3 = (direction) => {
    if (direction === 'up') {
      setMessage3("");
    } else {
      setMessage3("2002-2004");
    }
    setDirection3(direction);
  };

  const someCallback4 = (direction) => {
    if (direction === 'up') {
      setMessage4("");
    } else {
      setMessage4("2005-2008");
    }
    setDirection4(direction);
    callback();
  };

  const someCallback5 = (direction) => {
    if (direction === 'up') {
      setMessage5("");
} else {
      setMessage5("2017");
    }
    setDirection5(direction);
  };

  const someCallback6 = (direction) => {
    if (direction === 'up') {
      setMessage6("");
    } else {
      setMessage6("2018");
    }
    setDirection6(direction);
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
    setDirection1(null);
    setDirection2(null);
    setDirection3(null);
    setDirection4(null);
    setDirection5(null);
    setDirection6(null);
  };

  const [opacity1, setOpacity1] = useSpring(() => ({
    from: { opacity: 0 },
    opacity: direction1 === 'down'? 1 : 0,
    config: { duration: 1000 },
  }));

  const [opacity2, setOpacity2] = useSpring(() => ({
    from: { opacity: 0 },
    opacity: direction2 === 'down'? 1 : 0,
    config: { duration: 1000 },
  }));

  const [opacity3, setOpacity3] = useSpring(() => ({
    from: { opacity: 0 },
    opacity: direction3 === 'down'? 1 : 0,
    config: { duration: 1000 },
  }));

  const [opacity4, setOpacity4] = useSpring(() => ({
    from: { opacity: 0 },
    opacity: direction4 === 'down'? 1 : 0,
    config: { duration: 1000 },
  }));

  const [opacity5, setOpacity5] = useSpring(() => ({
    from: { opacity: 0 },
    opacity: direction5 === 'down'? 1 : 0,
    config: { duration: 1000 },
  }));

  const [opacity6, setOpacity6] = useSpring(() => ({
    from: { opacity: 0 },
    opacity: direction6 === 'down'? 1 : 0,
    config: { duration: 1000 },
  }));

  return (
    <div className="wrapper" onScroll={handleScrollUp}>
      <div id="timeline1" ref={timeline1} className="timeline"  />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle"  />
        <animated.div
          className={`message ${direction1 === 'up'? 'hidden' : 'visible'}`}
          style={{ opacity: opacity1 }}
        >
          {message1}
        </animated.div>
      </div>

      <div id="timeline2" ref={timeline2} className="timeline"  />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle"  />
        <animated.div
          className={`message ${direction2 === 'up'? 'hidden' : 'visible'}`}
          style={{ opacity: opacity2 }}
        >
          {message2}
</animated.div>
      </div>

      <div id="timeline3" ref={timeline3} className="timeline"  />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle"   />
        <animated.div
          className={`message ${direction3 === 'up'? 'hidden' : 'visible'}`}
          style={{ opacity: opacity3 }}
        >
          {message3}
        </animated.div>
      </div>

      <div id="timeline4" ref={timeline4} className="timeline"  />
      <div className="circleWrapper">
<div id="circle4" ref={circle4} className="circle"   />
        <animated.div
          className={`message ${direction4 === 'up'? 'hidden' : 'visible'}`}
          style={{ opacity: opacity4 }}
        >
          {message4}
        </animated.div>
      </div>

      <div id="timeline5" ref={timeline5} className="timeline"  />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle"  />
        <animated.div
          className={`message ${direction5 === 'up'? 'hidden' : 'visible'}`}
          style={{ opacity: opacity5 }}
        >
          {message5}
        </animated.div>
      </div>

      <div id="timeline6" ref={timeline6} className="timeline"  />
      <div className="circleWrapper">
        <div id="circle6" ref={circle6} className="circle"  />
        <animated.div
          className={`message ${direction6 === 'up'? 'hidden' : 'visible'}`}
          style={{ opacity: opacity6 }}
        >
          {message6}
        </animated.div>
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
      <h1>react-scroll-animation component</h1>
      <div className="stub1">⬇️ scroll to start ⬇️</div>
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
  reverse={false} // définir reverse sur false
/>
      <div className="stub2">{message}</div>
    </div>
  );
}