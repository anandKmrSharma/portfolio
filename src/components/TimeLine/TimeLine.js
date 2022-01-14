import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';



const Timeline = () => {

  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <br /><br />
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        {/* I am Mechanical graduate Engineer with a passion of
        developing scalable web application and working across the full stack. I
        have designed the clone of some of the websites using Node.js,
        Javascript, HTML, CSS and Mongodb. Curious to learn and apply my skills
        on a large scale. */}
        When I was in college, I felt that I was more interested in doing coding and solving problems rather than
        working in my mechanical workshop. So, I decided to learn technology. Initially, I tried to learn from
        Youtube videos as well as from other free resources, but I felt like I needed guidance from a professional
        if I want to pursue a career in the IT industry. This is why I decided to join Masai School to learn
        coding.
        I'm passionate about problem solving. I'm highly skilled in HTML, CSS, Mongodb and Express.

        I would like to work in an organisation that offers opportunities where i can showcase my technical
        skills and knowledge. I hope to work in an organisation, that allows me to learn new things on a 
        daily basis, which would in turn help my overall growth.
      </SectionText>

    </Section>
  );
};

export default Timeline;
