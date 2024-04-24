import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
import { FaGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';

const TimelineComponent = () => {
  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vertical-timeline",
        start: "top top",
        end: "+=500",
        markers: true,
        invalidateOnRefresh: true
      }
    });
    tl.to(".vertical-timeline-element", {
      opacity: 1,
      x: 30,
      y: () => 395, // calculate your value
      rotation: "+=720",
      duration: 2,
      ease: "bounce.out",
      stagger: 0.2 // add a stagger effect to the animation
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    }
  }, []);

  return (
    <>
    </>
  );
};

export default TimelineComponent;