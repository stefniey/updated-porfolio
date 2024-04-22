import React from 'react'
import { useEffect, useState } from "react";
import Typist from 'react-typist';
import './Hero.css'
import images from "../../constants/images";
import Aos from "aos";
import "aos/dist/aos.css";


const Hero = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);


  const [messages, setMessages] = useState(['Unlock the essence of my engineering prowess through this blueprint. Each line, each detail unveils my dedication to precision and innovation. ']);
  const [index, setIndex] = useState(0);

  const handleTypingDone = () => {
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);
  };


  return (

    <div className="about-content">
      <img data-aos='fade-up' className='about-img' src={images.rep} alt="" width='100%' />

      {/* <div className="text">
        <Typist onTypingDone={handleTypingDone}>
          <span>{messages[index]}</span>
          <Typist.Backspace count={messages[index].length} delay={2000} />
        </Typist>
      </div> */}

      <div className="h2">
        <h2>About Me</h2>
        <div className='line'></div>
      </div>

      <div className="main-content">

        <div className="image">
          <img data-aos='fade-up' className='stefniey' src={images.stef} alt="" width='100%' />
        </div>

        <div className="stef-text">

          <h3>Stephanie <span>Alor</span></h3>

          A dynamic individual with a passion for web development and a keen eye for detail. Originally hailing from Lagos, Nigeria, I have honed my skills and knowledge through academic pursuits and practical experiences.
          <br /> <br />

          <h3>Educational Background</h3>

          My journey in academia began at Nnamdi Azikiwe University, where I pursued a Bachelor of Arts in French Studies, complemented by a Diploma in Public Administration. This diverse educational foundation has equipped me with a holistic perspective and a penchant for interdisciplinary approaches.
          <br /><br />

          <h3>Professional Journey</h3>

          My foray into the tech world commenced with internships, where I delved into the realm of full stack and front-end development. At Zuri Team Inc., I immersed myself in the intricacies of user experience testing, feature implementation, and cross-functional collaboration. Subsequently, at Side Hustle, I further honed my frontend skills, contributing to the development of responsive and intuitive web applications.
          <br /><br />

          <h3>Skills and Expertise</h3>

          Proficient in HTML, CSS, and JavaScript, I leverage frameworks like React.js, Tailwind, and Bootstrap to craft seamless digital experiences. With a firm grasp on version control using Git and GitHub, I ensure streamlined development processes and collaborative workflows. Beyond technical prowess, my personal attributes encompass adaptability, analytical acumen, and a results-driven mindset.
          <br /><br />

          **Continuous Learning and Growth:**

          Driven by an insatiable curiosity, I actively engage in ongoing learning endeavors, acquiring certifications in frontend development and version control from reputable platforms such as Zuri Team Inc. and Coursera Inc. This commitment to professional development underscores my dedication to staying abreast of emerging technologies and industry best practices.

          **Beyond the Desk:**

          Outside of the professional realm, I find solace in traveling, exploring new cultures, and channeling my creativity into personal projects. Research also captivates my interest, fueling my quest for knowledge and innovation.

          **Recognition:**

          My achievements have not gone unnoticed, as evidenced by the Award of Excellence for Outstanding Performance bestowed upon me by NAPAS, UNIZIK, in 2016, underscoring my commitment to excellence in all endeavors.

          **In Summation:**

          In essence, I am a multifaceted individual driven by a passion for innovation, a thirst for knowledge, and a commitment to excellence. With a blend of technical expertise, personal attributes, and a penchant for continuous growth, I am poised to make meaningful contributions to any team or project I undertake.

        </div>



      </div>


    </div>
  )
}

export default Hero