import React from 'react'
import { useEffect } from "react";
import './Hero.css'
import images from "../../constants/images";
import resume from '../../assets/resume.pdf'
import Aos from "aos";
import "aos/dist/aos.css";
import { FaReact, FaGithub, FaHtml5, FaJs, FaNode, FaGit, FaCss3Alt, FaWordpress, FaDatabase, FaFilePdf } from 'react-icons/fa';

const Hero = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (

    <div className="about-content">

      <div className="detail">

        {/* imaage */}
        <div data-aos="fade-right" >
          <img className="img" src={images.xef} alt="" />
        </div>

        {/* text */}
        <div>
          <h1 data-aos="fade-left">Stephanie Alor</h1>
          <p data-aos="fade-left">A graduate of Nnamdi Azikiwe University, where I majored in Modern European Studies. In addition to my bachelor's degree, I hold a diploma in Public Administration, which has provided me with a broad understanding of administrative and organizational dynamics. Following my academic pursuits, I developed a keen interest in technology, specifically in Frontend development. This newfound passion led me to acquire a diverse set of skills in this area, along with several certifications and valuable internship experiences. My journey into tech has been driven by a desire to create engaging and user-friendly web experiences. I am continually expanding my expertise and seeking opportunities that allow me to apply my knowledge and grow professionally.</p>
          <br />

          <a href={resume}>
            <button className="btn1"><FaFilePdf /></button>
          </a>
          Curriculum Vitae
        </div>

      </div>
      <br />

      <div className='tags'>
        <h2>Tools & Technologies</h2>
        <p>Success is impossible without the right tools.</p>
      </div>
      <div className="icon-container">
        <div data-aos="fade-up" className="icon-item">
          <FaReact />
          <span>React</span>
        </div>
        <div data-aos="fade-up" className="icon-item">
          <FaGithub />
          <span>Github</span>
        </div>
        <div data-aos="fade-up" className="icon-item">
          <FaHtml5 />
          <span>HTML5</span>
        </div>
        <div data-aos="fade-up" className="icon-item">
          <FaJs />
          <span>JavaScript</span>
        </div>
        <div data-aos="fade-up" className="icon-item">
          <FaNode />
          <span>Node.js</span>
        </div>
        <div data-aos="fade-up" className="icon-item">
          <FaGit />
          <span>Git</span>
        </div>
        <div data-aos="fade-up" className="icon-item">
          <FaCss3Alt />
          <span>CSS3</span>
        </div>
        <div data-aos="fade-up" className="icon-item">
          <FaWordpress />
          <span>Wordpress</span>
        </div>
        <div data-aos="fade-up" className="icon-item">
          <FaDatabase />
          <span>Database</span>
        </div>
        <div data-aos="fade-up" className="icon-item">
          <img src={images.next} width='40%' />

          <span>Next Js</span>
        </div>


      </div>

    </div>
  )
}

export default Hero