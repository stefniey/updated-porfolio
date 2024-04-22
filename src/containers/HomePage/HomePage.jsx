import React from 'react'
import { useEffect, useState } from "react";
import Typist from 'react-typist';
import './HomePage.css'
import images from "../../constants/images";
import Aos from "aos";
import "aos/dist/aos.css";



const HomePage = () => {

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
    <div className="work">
        <div className="work-intro">
          

            <img data-aos='fade-up' className='work-image' src={images.road} alt="" />
            <div className="text">
        <Typist onTypingDone={handleTypingDone}>
          <span>{messages[index]}</span>
          <Typist.Backspace count={messages[index].length} delay={2000} />
        </Typist>
      </div>

            <div data-aos='fade-up' className="work-intro-text">
                <h2>Transforming Ideas into Seamless Experiences 🚀</h2>
                <p className='text-p'>Exploring the language of code, I craft digital landscapes that bring concepts to life. Transforming ideas into seamless experiences, I merge innovation and creativity. Witness the magic unfold, where every project is a canvas, and each line of code tells a story of functionality and brilliance.</p>
                <div className="work-img">
                    <div data-aos='fade-left' className="content">
                        <img src={images.getrich} alt="" width='90%' />
                    </div>
                    <div data-aos='fade-down' className="content">
                        <img src={images.card} alt="" width='90%' />
                    </div>
                    <div data-aos='fade-right' className="content">
                        <img src={images.lanpage} alt="" width='90%' />
                    </div>
                    

                    <a href="/Works" className='btn'>
                      <button>View More</button>
                    </a>
                
                    
                </div>

             
            </div>

            

        </div>
        {/* <div className="about-section">
                  <div className="img">
                    <img src={images.stef} alt="" />
                  </div>
                  <div className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam, delectus sunt quaerat quia perspiciatis laborum, vero neque, similique cumque veniam hic voluptas earum sit voluptatum itaque ex doloremque ratione?
                  </div>
                </div> */}


    </div>
);



}

export default HomePage