import React, { useEffect } from "react";
import { FaLink, FaInstagram, FaFacebook, FaFilePdf } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import images from "../../constants/images";
import resume from '../../assets/resume.pdf'
import { Link } from 'react-router-dom';
import "./HomePage.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="home">

      {/* profile */}
      <div className="profile">
        {/* imaage */}
        <div data-aos="fade-right">
          <img className="img" src={images.xef} alt="" width='100%' />
        </div>

        {/* text */}
        <div>
          <h1 data-aos="fade-left">Stephanie Alor</h1>
          <h1 data-aos="fade-left"><small>Embraces your presence ☺️</small></h1>
          <p data-aos="fade-left" >Explore my portfolio and discover the dynamic potential of web development in action. As a passionate and seasoned Frontend developer, I specialize in crafting visually stunning and supremely functional websites. Each project reflects my commitment to innovation, creativity, and user-centric design, ensuring an engaging and seamless experience. Dive in to see the transformative power of expertly crafted digital solutions.</p>
          <br />

          <a href={resume}>
            <button className="btn1"><FaFilePdf /> </button>

          </a>
          Curriculum Vitae
        </div>

      </div>
      <br />

      {/* knowledge */}
      <div>
        <div className="webcaption">
          <h1>Knowledge</h1>
          <p>Explore my knowledge base.</p>
        </div>
        <div className="container">

          <div data-aos="fade-up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zm-8 20a2 2 0 110-4 2 2 0 010 4zm4-5H8V7h8v10z" />
            </svg>

            <h1>Responsive Web Design</h1>

            <p>
              Crafting responsive web designs for optimal user experiences across all devices, leveraging CSS frameworks and strategic media queries.
            </p>
          </div>

          <div data-aos="fade-up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12 2c-.75 0-1.5.28-2.08.84l-7.34 7.34a2.94 2.94 0 000 4.16l5.25 5.25a2.94 2.94 0 004.16 0l7.34-7.34c.56-.56.84-1.31.84-2.08s-.28-1.52-.84-2.08l-2.5-2.5a2.94 2.94 0 00-2.08-.86zm1.12 8.63l-.63.63c-.67.67-1.73.67-2.4 0l-4.12-4.12a1.7 1.7 0 012.4-2.4l2.32 2.32 1.56-1.56a1.7 1.7 0 012.4 2.4zm4.7-6.58c-.33-.34-.77-.53-1.24-.53-.47 0-.91.19-1.24.53-.33.34-.53.77-.53 1.24s.19.91.53 1.24c.34.33.77.53 1.24.53s.91-.19 1.24-.53c.34-.33.53-.77.53-1.24s-.19-.91-.53-1.24z" />
            </svg>

            <h1>Version Control</h1>
            <p>
              I am proficient in version control systems, utilizing Git and SVN to
              manage code repositories effectively, ensuring streamlined
              collaboration and seamless integration of new features and updates
              into projects.
            </p>
          </div>

          <div data-aos="fade-up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-11a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-1.5-6.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 16a.5.5 0 110-1 .5.5 0 010 1z" />
            </svg>

            <h1>SEO</h1>
            <p>
              I excel in SEO strategies, leveraging analytics and optimization
              techniques to enhance digital visibility and drive impactful growth
              online.
            </p>
          </div>

          <div data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-10.5h3v-3h-3v3zm0 5h3v-3h-3v3z" />
            </svg>


            <h1>Dynamic Web Development</h1>
            <p>
              Proficient in JavaScript and modern frameworks to create responsive,
              interactive web applications that prioritize user experience and
              performance.
            </p>
          </div>

          <div data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-11a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-1.5-6.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 16a.5.5 0 110-1 .5.5 0 010 1z" />
            </svg>

            <h1>Web Performance Optimization</h1>
            <p>
              Expert in digital performance enhancement, specializing in optimizing web applications for speed, responsiveness, and efficiency. Enhances user experience by implementing best practices in performance tuning, caching strategies, and resource optimization.
            </p>
          </div>

          <div data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
            </svg>

            <h1>Databases</h1>
            <p>
              I am proficient in database management, adept at handling and optimizing data storage, retrieval, and integration for efficient application development.
            </p>
          </div>
        </div>
      </div>

      <br /> <br />

      {/* works */}
      <div >
        <div className="webcaption">
          <h1>Web Creations</h1>
          <p>Discover creativity through flawless design.</p>
        </div>

        <div className="container">
          <div data-aos="fade-up">
            <h1>Getrich</h1>
            <p>ReactJs Taiwind</p>
            <img src={images.getrich} alt="" width="90%" />
            <a href="https://getrichcuisne.netlify.app/">
              <FaLink />
            </a>
          </div>

          <div data-aos="fade-right">
            <h1>Gpt-3</h1>
            <p>ReactJs</p>
            <img src={images.codenova} alt="" width="90%" />
            <a href="https://gipt-3.netlify.app/">
              <FaLink />
            </a>
          </div>

          <div data-aos="fade-left">
            <h1>GetFood</h1>
            <p>Html & Css</p>
            <img src={images.getfood} alt="" width="90%" />
            <a href="https://food-fiestae.netlify.app/">
              <FaLink />
            </a>
          </div>
        </div>
      </div>


      <Link to="/Project">
      <button className="btn">View More</button>
      </Link>
      <br />

      {/* contact */}
      <div>
        <div className="webcaption">
          <h1>Get In Touch</h1>
          <p>Feel free to reach out to me if you have any questions.</p>
        </div>
        <div className="container">

          <div className="links">
            <div data-aos="fade-up">
              <a href={resume}>
                < FaFilePdf size={23} style={{ color: "#000" }} /> CV
              </a>
            </div>

            <div data-aos="fade-up">
              <a href="https://github.com/stefniey">
                <FaGithub size={23} style={{ color: "#000" }} /> Github
              </a>
            </div>

            <div data-aos="fade-up">
              <a href="mailto:stephaniealor7@gmail.com">
                <MdEmail size={23} style={{ color: "#000" }} /> Email
              </a>
            </div>

            <div data-aos="fade-up">
              <a href="https://www.linkedin.com/in/stephanie-alor-1b913624a/">
                <FaLinkedin size={23} style={{ color: "#000" }} /> Linkedin
              </a>
            </div>

            <div data-aos="fade-up">
              <a href="https://www.instagram.com/stephanie_dex/">
                <FaInstagram size={23} style={{ color: "#000" }} /> Insta
              </a>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default HomePage;


