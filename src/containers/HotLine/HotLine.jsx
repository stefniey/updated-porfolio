import React from 'react'
import { useEffect, useState } from "react";
import Typist from 'react-typist';
import './HotLine.css'
import images from "../../constants/images";
import { FaEnvelope, FaPhone, FaInstagram, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Aos from "aos";
import "aos/dist/aos.css";



const HotLine = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);


  const [messages, setMessages] = useState([
    "Ready to embark on an exciting journey? Let's connect and create something extraordinary together! Drop me a message below or explore my profile for a unique collaboration experience."
  ]);
  
  const [index, setIndex] = useState(0);

  const handleTypingDone = () => {
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);
  };
  return (
    <div className="work">
        <div className="work-intro">
          

            <img data-aos='fade-up' className='work-image' src={images.fone} alt="" />
            <div className="text">
        <Typist onTypingDone={handleTypingDone}>
          <span>{messages[index]}</span>
          <Typist.Backspace count={messages[index].length} delay={2000} />
        </Typist>
      </div>

            <div data-aos='fade-up' className="work-intro-text">
                <h2>Contact Me</h2>
                <p className='text-p'>Connect with me through the link below for inquiries and collaboration opportunities. Looking forward to hearing from you! Let's connect and make things happen!</p>
                <div className="work-img">
                    <div data-aos='fade-up'className="content">
                    <FaEnvelope /> 
                    </div>
                    <div data-aos='fade-up' className="content">
                    <FaPhone />
                    </div>
                    <div className="content">
                    <FaGithub />
                    </div>
                    <div className="content">
                    <FaLinkedin /> 
                    </div>
                    <div className="content">
                    <FaInstagram />
                    </div>
                    <div className="content">
                    <FaFacebook />
                    </div>

                
                    
                </div>

             
            </div>

            

        </div>



    </div>
);



}

export default HotLine