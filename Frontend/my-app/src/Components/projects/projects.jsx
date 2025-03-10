import React from "react";
import Star from "../assets/Star.png";
import V2 from "../assets/V2.png";
import ProjectList from "./projectlist";
import Portfolio from "../images/Portfolio.jpg";
import Work from "../images/language.png";
import Meme from "./doc.png";
import Drums from "./hemoglobin.png";
import Simon from "./agrichain.png";
import Ocean from "./opencv.png";
import { motion } from "framer-motion";

const proInfo = [
    {
        no: 1,
        title: "Portfolio",
        image: Portfolio,
        discription: "This is the portfolio website built with React.js and styled using Tailwind CSS, it reflects my proficiency in creating sleek, responsive, and user-friendly web applications. The website serves as a comprehensive showcase of my skills, projects, and experiences.",
        link: "https://github.com/mrunali0204/Mrunali-Jibhakate-Portfolio",
    },
    {
        no: 2,
        title: "Language Translation App",
        image: Work,
        discription: "As a developer, I developed the 'app for translation of languages'.",
        link: "https://github.com/mrunali0204/translation_app",
    },
    {
        no: 3,
        title: "Medi-Link",
        image: Meme,
        discription: "This project is a fun and its like LINKEDIN FOR DOCTORS, its for connecting of doctors in one app only dedicated for doctors!",
        link: "https://github.com/mrunali0204/Frontend-MediLink",
    },
    {
        no: 4,
        title: "Open-CV",
        image: Ocean,
        discription: "I have done lot of projects on Open-CV, like Face Detection, Object Detection, Image Processing, etc.",
        link: "https://github.com/mrunali0204/Opencv",
    },
    {
        no: 5,
        title: "Hemoglobin Detection website",
        image: Drums,
        discription: "We have developed a kit (Heamoglobin detecting kit) which detects heamoglobin & website for Hemoglobin Detection using Machine Learning. We have used the Random Forest Classifier algorithm to predict the Hemoglobin level of the patient.",
        link: "https://github.com/mrunali0204/Project_01_ML",
    },
    {
        no: 6,
        title: "AgriChain",
        image: Simon,
        discription: "Build a tool that tracks the journey of agricultural products from farm to table, ensuring transparency, reducing waste, and increasing consumer trust in food sources.",
        link: "https://github.com/mrunali0204/temp_sih",
    },
    
];

function Projects() {
    return (
        <div className="flex flex-col mt-6 justify-center items-center">
            {/* Header Section with Framer Motion animation */}
            <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0 }} // Start with opacity 0
                animate={{ opacity: 1 }} // Animate to opacity 1
                transition={{ duration: 1 }} // Transition duration of 1 second
            >
                <div>
                    <img src={Star} alt="Star Icon" className="h-8 sm:h-auto" />
                </div>
                <div className="text-white text-xl sm:text-2xl lg:text-3xl mx-2 font-medium">
                    PROJECTS
                </div>
                <div>
                    <img src={Star} alt="Star Icon" className="h-8 sm:h-auto" />
                </div>
            </motion.div>

            {/* Project List Section with Framer Motion */}
            <motion.div
                className="mt-10 sm:mt-16 mx-10 sm:mx-16 md:mx-24 lg:mx-36 xl:mx-44"
                initial={{ opacity: 0, y: 50 }} // Start off-screen, slightly faded
                animate={{ opacity: 1, y: 0 }} // Slide into view and fade in
                transition={{ duration: 1, delay: 0.2 }} // Add slight delay
            >
                {proInfo.map((item) => (
                    <motion.div
                        key={item.no}
                        initial={{ opacity: 0, x: -50 }} // Slide from left
                        animate={{ opacity: 1, x: 0 }} // Slide into place
                        transition={{ duration: 0.5, delay: item.no * 0.1 }} // Stagger delay for each item
                    >
                        <ProjectList
                            no={item.no}
                            title={item.title}
                            image={item.image}
                            discription={item.discription}
                            link={item.link}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Footer Decoration with Framer Motion animation */}
            <motion.div
                initial={{ opacity: 0 }} // Fade in
                animate={{ opacity: 1 }} // Fade into view
                transition={{ duration: 1, delay: 0.5 }} // Delay to make it appear after project list
            >
                <img src={V2} alt="Decorative Icon" className="w-20 sm:w-auto" />
            </motion.div>
        </div>
    );
}

export default Projects;