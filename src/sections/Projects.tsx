import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/tailor.png",
      projectName: "Tailor Maven (Online Tailoring Service)",
      projectDescription:
        "Taylor Maven is an online tailoring service that lets users design custom-made suits by selecting high-quality fabrics and providing their measurements. The platform offers options for purchasing fabric only or gifting to others, catering to individuals looking for personalized style for any occasion. Built on a MERN stack, Taylor Maven features Cloudinary for media hosting, Stripe for payments, and Socket.io for real-time interactions, ensuring a convenient and satisfying user experience in the bespoke suit market.",
      projectTech: ["MERN Stack", "Socket.io", "React Three Fiber", "CSS", "Stripe"],
      projectExternalLinks: {
        github: "https://github.com/al-rafi304/TailorMaven.git",
      },
    },
    {
      image: "/tolet.png",
      projectName: "House Rental Website",
      projectDescription:
        "House Rental Website is built using the Django framework, featuring user authentication, property listings, booking management, and robust search capabilities. The backend utilizes Python with libraries like Pillow for image processing and Requests for HTTP operations, while SQLite serves as the database. For the front end, standard HTML and Bootstrap are employed for responsive design, ensuring a user-friendly experience for managing house rentals.",
      projectTech: ["Django", "Bootstrap CSS", "SQLite", "Python"],
      projectExternalLinks: {
        github: "https://github.com/farhan-sadik247/House-Rental-Website.git",
      },
    },
    {
      image: "/edu.png",
      projectName: "Education Platform Website",
      projectDescription:
        "Professor's Hideout is an online education platform that offers personalized learning for all ages through a user-friendly interface built with ReactJS and Bootstrap. It features a wide range of courses, user authentication, a comprehensive catalog, and secure payment options. Powered by Django and the Django REST Framework, with SQLite for data management, the platform connects expert educators with students to help them achieve their full potential.",
      projectTech: ["React", "Django", "Django REST Framework", "Bootstrap", "SQLite"],
      projectExternalLinks: {
        github: "https://github.com/farhan-sadik247/EducationPlatForm-Frontend.git",
      },
    },
  ];

  const [expandedStates, setExpandedStates] = useState<boolean[]>(
    Array(projectsData.length).fill(false)
  );

  const toggleExpanded = (index: number) => {
    setExpandedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Websites I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          (
            { image, projectDescription, projectExternalLinks, projectName, projectTech },
            index
          ) => (
            <motion.div
              className="project"
              key={projectName}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
              }}
            >
              <div className="project-image">
                <Image src={image} alt={projectName} width={600} height={300} />
              </div>
              <div className="project-description">
                <p>
                  {expandedStates[index]
                    ? projectDescription
                    : `${projectDescription.slice(0, 100)}...`}
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="see-more-btn"
                  >
                    {expandedStates[index] ? "Show Less" : "See More"}
                  </button>
                </p>
              </div>
              <ul className="project-tech">
                {projectTech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <Link
                  href={projectExternalLinks.github}
                  className="github-link"
                >
                  <FiGithub />
                </Link>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
