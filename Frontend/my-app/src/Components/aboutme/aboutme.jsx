import React from "react";
import { motion } from "framer-motion"; // Importing motion
import V1 from "./V1.png";
import V2 from "../assets/V2.png";
import Profile from "./Profile.jpg";

const Aboutme = () => {
    return (
        <div className="flex flex-col mt-[8rem] sm:mt-[14rem] md:mt-[16rem] lg:mt-[20rem] xl:mt-[24rem] justify-center items-center">
            {/* Hero Section */}
            <motion.div
                className="flex flex-col mx-[12%] sm:flex-row sm:mx-12 md:mx-16 lg:mx-20 xl:mx-28"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="relative sm:w-1/2 flex">
                    <div className="absolute -top-2 right-12 sm:-top-6 sm:right-16 md:-top-6 md:right-20 lg:-top-10 lg:right-28 xl:-top-10 xl:right-40">
                        <motion.img
                            src={V1}
                            alt=""
                            className="h-8 sm:h-10 lg:h-auto"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            transition={{ type: 'spring', stiffness: 100 }}
                        />
                    </div>
                    <div className="bg-[#D9D9D9] absolute w-[70%] h-[16rem] sm:h-60 md:h-72 lg:h-80 xl:h-96 rounded-xl z-20">
                        <motion.img
                            src={Profile}
                            alt=""
                            className="w-full h-full rounded-xl object-cover"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <div className="bg-[#101630] absolute border-[6px] sm:border-[8px] border-[#4EB8DC] h-[16rem] sm:h-60 md:h-72 lg:h-80 w-[70%] xl:h-96 rounded-xl z-0 top-8 left-10 sm:top-8 sm:left-8 md:top-8 md:left-8 lg:top-10 lg:right-10 xl:top-8"></div>
                </div>
                <motion.div
                    className="flex flex-col sm:w-1/2 mt-[20rem] sm:mt-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <div className="text-white text-[0.9rem] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mb-3 sm:mb-4 xl:mb-6 px-0 sm:mx-0">ABOUT ME</div>
                    <div className="text-white text-[0.8rem] sm:text-[0.75rem] md:text-sm lg:text-base xl:text-xl font-light mb-3 sm:mb-4 xl:mb-6">
                        I'm Mrunali Jibhakate, currently a second-year student at Yashwantrao Chavan College of Engineering, majoring in Electronics Engineering. My passion lies in Web development and problem-solving through competitive programming. I thrive on the creativity and technical challenges that these fields present, constantly seeking opportunities to learn and grow. Whether it's crafting intuitive user interfaces, developing dynamic web applications, or tackling complex coding problems, I am always eager to take on new challenges and push my boundaries.
                    </div>
                    <a href="https://drive.google.com/file/d/1BPZtu0McGs5ffGeBek9NhVta7luhbA9n/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            className="bg-gradient-to-r from-[#559BD8] to-[#4933C2] rounded-lg text-[0.7rem] md:text-base sm:mx-0 p-3 md:p-4 h-4 w-20 sm:h-2 sm:w-20 md:h-8 md:w-24 lg:h-10 lg:w-28 xl:h-14 xl:w-32 flex justify-center items-center text-white font-normal lg:font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            RESUME
                        </motion.div>
                    </a>
                </motion.div>
            </motion.div>
            <motion.div
                className="flex justify-center items-center mt-6 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <motion.img
                    src={V2}
                    alt=""
                    className="w-20 sm:w-auto"
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                />
            </motion.div>
        </div>
    );
};

export default Aboutme;

