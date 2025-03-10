import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Star from "../assets/Star.png";
import V2 from "../assets/V2.png";
import SkillsList from "./skillslist.jsx";

const skillInfo = [
    {
        key: 1,
        title: "Languages",
        skill: ["C", "Java", "Python", "JavaScript"]
    },
    {
        key: 2,
        title: "Developer Tools",
        skill: ["HTML", "CSS", "Bootstrap", "ReactJS", "TailwindCSS", "NextJS", "NodeJS", "ExpressJS",]
    },
    {
        key: 3,
        title: "Cloud/Databases:",
        skill: ["FireBase", "MongoDB"]
    },
    {
        key: 4,
        title: "Soft Skills",
        skill: ["Leadership", "Interpersonal Skills, Teamwork", "Problem Solving", "Communication"]
    },
    {
        key: 5,
        title: "Coursework",
        skill: ["Data Structures Algorithm", "Object Oriented Programming"]
    },
    {
        key: 6,
        title: "Tools",
        skill: ["VS Code", "GitHub", "GIT", "Figma", "Photoshop"]
    },
    {
        key: 7,
        title: "Areas of Interest",
        skill: ["Web Development", "Designing", "Competitive Programming"]
    }
];

function Skills() {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };
    const handleClosePopup = () => {
        setSelectedSkill(null);
    };

    return (
        <div className="flex flex-col mt-6 justify-center items-center">
            <div className="flex justify-center items-center">
                <div><img src={Star} alt="" className="h-8 sm:h-auto" /></div>
                <div className="text-white text-xl sm:text-2xl lg:text-3xl mx-2 font-medium">SKILLS</div>
                <div><img src={Star} alt="" className="h-8 sm:h-auto" /></div>
            </div>

            {/* Skill List Section with Animation */}
            <motion.div 
                className="mt-10 mx-20 sm:mx-36 lg:mx-44 xl:mx-52"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {skillInfo.map((items) => (
                    <SkillsList
                        key={items.key}
                        title={items.title}
                        onClick={() => handleSkillClick(items)}
                    />
                ))}
            </motion.div>

            <div className="mt-6">
                <img src={V2} alt="" className="w-20 sm:w-auto" />
            </div>

            {/* Skill Details Popup Animation */}
            {selectedSkill && (
                <motion.div 
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="bg-[#101630] p-4 rounded-lg relative"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-xl font-medium mb-4 text-white">{selectedSkill.title}</div>
                        <div className="mb-4 text-white font-light">
                            {selectedSkill.skill.map((skill, index) => (
                                <div key={index} className="mb-0">{skill}</div>
                            ))}
                        </div>
                        <motion.div
                            className="bg-blue-500 text-white px-4 py-2 rounded flex justify-center items-center"
                            onClick={handleClosePopup}
                            whileHover={{ scale: 1.1 }}
                        >
                            Close
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}

export default Skills;
