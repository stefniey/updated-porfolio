import React from "react";
import { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa";
import Typist from 'react-typist';
import images from "../../constants/images";
import "./Work.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
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
                <div className="image-holder">
                    <img data-aos='fade-up' className='image' src={images.skills} alt="" />
                    <div className="typists-container">
                        <Typist className="center-typists" onTypingDone={handleTypingDone}>
                            <span>{messages[index]}</span>
                            <Typist.Backspace count={messages[index].length} delay={2000} />
                        </Typist>
                    </div>

                </div>


                <div className="work-intro-text">
                    <h2>Transforming Ideas into Seamless Experiences 🚀</h2>
                    <p className="text-p">
                        Exploring the language of code, I craft digital landscapes that
                        bring concepts to life. Transforming ideas into seamless
                        experiences, I merge innovation and creativity. Witness the magic
                        unfold, where every project is a canvas, and each line of code tells
                        a story of functionality and brilliance.
                    </p>

                    <div className="work-img">
                        <div data-aos="fade-left" className="content">
                            <img src={images.getrich} alt="" width="100%" />

                            <div className="icon">
                                <a href="https://getrichcuisne.netlify.app/">
                                    <FaLink />
                                </a>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="content">
                            <img src={images.card} alt="" width="100%" />
                            <div className="icon">
                                <a href="https://hoobanc.netlify.app/">
                                    <FaLink />
                                </a>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="content">
                            <img src={images.wallpaper} alt="" width="100%" />
                            <div className="icon">
                                <a href="https://filmfront.netlify.app/">
                                    <FaLink />
                                </a>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="content">
                            <img src={images.lanpage} alt="" width="100%" />
                            <div className="icon">
                                <a href="https://landing-page-lpg.vercel.app/">
                                    <FaLink />
                                </a>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="content">
                            <img src={images.codenova} alt="" width="100%" />
                            <div className="icon">
                                <a href="https://gipt-3.netlify.app/">
                                    <FaLink />
                                </a>
                            </div>
                        </div>

                        <div data-aos="fade-right" className="content">
                            <img src={images.roompage} alt="" width="100%" />
                            <div className="icon">
                                <a href="https://room-homes.netlify.app/">
                                    <FaLink />
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="content">
                            <img src={images.getfood} alt="" width="100%" />
                            <div className="icon">
                                <a href="https://food-fiestae.netlify.app/">
                                    <FaLink  />
                                </a>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="content">
                            <img src={images.humanising} alt="" width="100%" />
                            <div className="icon">
                                <a href="https://insures-page.netlify.app/">
                                    <FaLink />
                                </a>
                            </div>
                        </div>

                        <div data-aos="fade-right" className="content">
                            <img src={images.qrcode} alt="" width="100%" />
                            <div className="icon">
                                <a href="https://teamgnatpp.netlify.app/">
                                    <FaLink />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
