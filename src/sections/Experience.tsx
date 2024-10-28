import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Summary",
      role: "About",
      shortDescription: [
        "I am a highly motivated Computer Science and Engineering undergrad with a strong foundation in web development.",
        "Proficient in ReactJS, Django, and MERN stack, with experience in creating responsive and user-friendly applications.",
        "Enthusiastic about taking on new challenges and contributing technical skills in a dynamic and collaborative environment.",
        "GitHub: https://github.com/farhan-sadik247",
      ],
    },
    {
      name: "Education",
      role: "Education",
      shortDescription: [
        "B.Sc. in Computer Science & Engineering (Currently studying)",
        <ul>
          <li>BRAC University, Bangladesh</li>
          <li>Undergraduate Student</li>
        </ul>,
        "Higher Secondary Certificate (HSC)",
        <ul>
          <li>Science</li>
          <li>Bogra Cantonment Public School & College, Bogura</li>
          <li>Successfully passed with GPA 5.00</li>
        </ul>,
        "Secondary School Certificate (SSC)",
        <ul>
          <li>Science</li>
          <li>Nawabganj ML Pilot High School, Dinajpur</li>
          <li>Successfully passed with GPA 5.00</li>
        </ul>,
      ],
    },
    {
      name: "Skills",
      role: "Technical Skills",
      shortDescription: [
        "Programming Languages: Python, C++",
        "Web Development: MERN Stack, Django Framework, HTML, CSS, JavaScript",
        "Machine Learning Tools: Pandas, NumPy, TensorFlow, Scikit-learn",
        "Database Management: MySQL, MongoDB",
        "Version Control: Git, GitHub",
      ],
    },
    {
      name: "Projects",
      role: "Project Details",
      shortDescription: [
        "House Rental Website: Built a Django-based house rental website with booking management and search features for newcomers in Dhaka.",
        "Education Platform: Developed an online learning platform with ReactJS and Django for content uploading and student enrollment.",
        "Smart Blind Stick: Created a smart stick using Arduino for visually impaired individuals with obstacle detection and GPS navigation.",
        "Tailor Maven: Developed an online tailoring service using MERN stack with 3D suit visualization, body measurements, and Stripe for payments.",
        "Disaster Tweets Prediction: Built LSTM models to classify tweets as disaster or non-disaster, achieving 80.80% accuracy.",
      ],
    },
  ];

  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>My Resume</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
            </h3>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
