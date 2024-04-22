import React from 'react';
import { useState, useEffect } from "react";
import images from "../../constants/images";
import './Work.css';
import Aos from "aos";
import "aos/dist/aos.css";


const Work = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className="work">
            <div className="work-intro">

                <img data-aos='fade-up' className='work-image' src={images.skills} alt="" />

                <div data-aos='fade-up' className="work-intro-text">
                    <h2>Transforming Ideas into Seamless Experiences 🚀</h2>
                    <p className='text-p'>Exploring the language of code, I craft digital landscapes that bring concepts to life. Transforming ideas into seamless experiences, I merge innovation and creativity. Witness the magic unfold, where every project is a canvas, and each line of code tells a story of functionality and brilliance.</p>
                    <div className="work-img">
                        <div data-aos='fade-up' className="content">
                            <img src={images.getrich} alt="" width='90%' />

                        </div>
                        <div data-aos='fade-up' className="content">
                            <img src={images.card} alt="" width='90%' />

                            
                        </div>
            
                        <div data-aos='fade-up' className="content">
                            <img src={images.lanpage} alt="" width='90%' />
                        </div>
                        <div data-aos='fade-left' className="content">
                            <img src={images.codenova} alt="" width='90%'  />
                        </div>

                        <div data-aos='fade-down' className="content">
                            <img src={images.roompage} alt="" width='90%'  />
                            
                        </div>
                        <div data-aos='fade-right' className="content">
                            <img src={images.getfood} alt="" width='90%'  />
                            
                        </div>
                        <div data-aos='fade-up' className="content">
                            <img src={images.humanising} alt="" width='90%'  />
                            
                        </div>
                        <div data-aos='fade-up' className="content">
                            <img src={images.qrcode} alt="" width='90%'  />
                            
                        </div>
                        <div data-aos='fade-up' className="content">
                            <img src={images.frontier} alt="" width='100%'  />
                            
                        </div>
                        
                        
                        
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Work;
