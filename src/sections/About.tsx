import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          A highly motivated Computer Science and Engineering undergrad studying in BRAC University with a strong
          foundation in web development. Proficient in ReactJS, Django, and MERN stack, with
          experience in creating responsive and user-friendly applications. Enthusiastic about
          taking on new challenges and contributing technical skills in a dynamic and
          collaborative environment.
          </p>
          <p className="about-grid-info-text">
          Here are a few technologies I’ve been learning and working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Django Framework</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">MERN Stack</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/farhan.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
