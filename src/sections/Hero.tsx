import Button from "@/components/Button";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const rotatingTexts = ["student", "web developer", "learner", "programmer"];

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentText = rotatingTexts[currentIndex];

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length); // Move to next word
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Farhan Sadik.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        I am a <span className="typing-text">{displayText}</span>
        <span className="cursor">|</span>
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        I&apos;m a passionate web developer and a student. 
        I&apos;m always up for new challenges, constantly seeking to 
        improve my skills and push the boundaries of web development. 
        My current focus is on creating accessible, user-centered 
        digital experiences. 
        Balancing my studies with hands-on projects, 
        I strive to craft impactful and innovative solutions for the
        web.
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Check out my projects"
          link="https://github.com/farhan-sadik247"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
