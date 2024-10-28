import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/tailor.png",
      projectName: "Tailor Maven(Online Tailoring Service)",
      projectLink: "https://github.com/al-rafi304/TailorMaven.git",
      projectDescription:
        "Taylor Maven is an online tailoring service that lets users design custom-made suits by selecting high-quality fabrics and providing their measurements. The platform offers options for purchasing fabric only or gifting to others, catering to individuals looking for personalized style for any occasion. Built on a MERN stack, Taylor Maven features Cloudinary for media hosting, Stripe for payments, and Socket.io for real-time interactions, ensuring a convenient and satisfying user experience in the bespoke suit market.",
      projectTech: [
        "MERN Stack",
        "Socket.io",
        "React Three Fiber",
        "CSS",
        "Stripe",
      ],
      projectExternalLinks: {
        github: "https://github.com/al-rafi304/TailorMaven.git",
        externalLink: "https://github.com/farhan-sadik247",
      },
    },
    {
      image: "/tolet.png",
      projectName: "House Rental Website",
      projectLink: "https://github.com/farhan-sadik247",
      projectDescription:
        "House Rental Website is built using the Django framework, featuring user authentication, property listings, booking management, and robust search capabilities. The backend utilizes Python with libraries like Pillow for image processing and Requests for HTTP operations, while SQLite serves as the database. For the front end, standard HTML and Bootstrap are employed for responsive design, ensuring a user-friendly experience for managing house rentals.",
      projectTech: [
        "Django",
        "Bootstrap CSS",
        "SQLite",
        "Python",
      ],
      projectExternalLinks: {
        github: "https://github.com/farhan-sadik247/House-Rental-Website.git",
        externalLink: "https://github.com/farhan-sadik247",
      },
    },
    {
      image: "/edu.png",
      projectName: "Education Platform Website",
      projectLink: "https://github.com/farhan-sadik247",
      projectDescription:
        "Professor's Hideout is an online education platform that offers personalized learning for all ages through a user-friendly interface built with ReactJS and Bootstrap. It features a wide range of courses, user authentication, a comprehensive catalog, and secure payment options. Powered by Django and the Django REST Framework, with SQLite for data management, the platform connects expert educators with students to help them achieve their full potential.",
        projectTech: [
          "React",
          "Django",
          "Django REST Framework",
          "Bootstrap",
          "SQLite",
      ],
      
      projectExternalLinks: {
        github: "https://github.com/farhan-sadik247/EducationPlatForm-Frontend.git",
        externalLink: "https://github.com/farhan-sadik247",
      },
    },
  ];
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
          ({
            image,
            projectDescription,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
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
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
