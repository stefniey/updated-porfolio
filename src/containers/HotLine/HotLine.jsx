import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import './HotLine.css';
import images from "../../constants/images";
import Aos from "aos";
import "aos/dist/aos.css";
import { useForm, ValidationError } from '@formspree/react';

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

  const [state, handleSubmit] = useForm("xpwawkqn");
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    await handleSubmit(e);
    if (!state.errors) {
      form.reset();
      setSubmitted(true);
    }
  };


  if (state.succeeded || submitted) {
    
  }

  return (
    <div className="hotline">
      <div className="image-holder">
        <img data-aos='fade-up' className='work-image' src={images.fone} alt="" />
        <div className="typist-container">
          <Typist className="center-typist" onTypingDone={handleTypingDone}>
            <span>{messages[index]}</span>
            <Typist.Backspace count={messages[index].length} delay={2000} />
          </Typist>
        </div>
      
      </div>
      <div>
        <h1>Get In Touch</h1>
        <p>Thank you for visiting! If you have any questions, suggestions, or just want to say hello, please don't hesitate to contact me. I am always happy to connect and assist you with any information you might need.</p>

        <form onSubmit={handleFormSubmit}>
          <label htmlFor="first-name">
            First Name
          </label>
          <input
            id="first-name"
            type="text"
            name="first-name"
            required
          />
          <ValidationError 
            prefix="First Name"
            field="first-name"
            errors={state.errors}
          />
          <label htmlFor="last-name">
            Last Name
          </label>
          <input
            id="last-name"
            type="text"
            name="last-name"
            required
          />
          <ValidationError 
            prefix="Last Name"
            field="last-name"
            errors={state.errors}
          />
          <label htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError 
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <label htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
          />
          <ValidationError 
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default HotLine;

