import React from "react";
import V1 from "./V1.png";
import V2 from "./V2.webp"
const Hero=()=>{
    return (
        <div className="relative">
            <div className="z-0 absolute -top-[5rem] sm:-top-[6rem] right-0 -left-6"><img src={V1} alt=""></img></div>
            <div className="z-20 flex flex-col">
                <div className="text-white absolute left-8 sm:left-24 top-2 sm:top-16 md:top-20 lg:top-24 xl:top-32 text-[1.05rem] sm:text-2xl lg:text-3xl">HELLO, I’m</div>
                <div className="flex flex-row absolute left-8 sm:left-24 top-5 sm:top-20 md:top-24 lg:top-32 xl:top-40 justify-center items-center">
                    <div className="text-white text-[1.6rem] leading-6 sm:text-4xl  md:text-5xl xl:text-6xl font-bold">MRUNALI JIBHAKATE</div>
                    <div><img src={V2} alt="" className="h-14 sm:h-auto"></img></div>
                </div>
                <div className="text-white text-[0.7rem] sm:text-sm md:text-base lg:text-lg xl:text-xl absolute left-8 sm:left-24 top-[4rem] sm:top-[9.5rem] md:top-44 lg:top-52 xl:top-60 italic font-light">Web Developer, Designer & Programmer</div>
            </div>
        </div>
    )
}

export default Hero;