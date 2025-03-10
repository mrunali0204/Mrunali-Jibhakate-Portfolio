import React from "react";
import V1 from "./v1.png";
import V2 from "./V2.png";
import Card from "./card";
import Star from "./Star.png";
import Instagram from "../images/Instagram.png";
import Github from "../images/Github.png";
import Discord from "../images/Discord.png";
import Linkedln from "../images/Linkedln.png";

function Contact() {
  return (
    <div className="flex flex-col h-[170vh] sm:h-[110vh] md:h-[125vh] lg:h-[140vh] xl:h-[110vh] mt-8 bg-gradient-to-r from-[#4A39C3] to-[#509AD7] rounded-t-[4rem] sm:rounded-t-[10rem] lg:rounded-t-[12rem] relative pb-20">
      <div className="flex justify-center items-center mt-4 sm:mt-6 md:mt-10">
        <div>
          <img src={Star} alt="" className="h-8 sm:h-auto" />
        </div>
        <div className="text-white text-xl sm:text-2xl lg:text-3xl mx-2 font-medium">
          CONTACT
        </div>
        <div>
          <img src={Star} alt="" className="h-8 sm:h-auto" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mx-10 sm:mx-16 md:mx-24 lg:mx-40 mt-6 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="flex flex-col sm:w-1/2">
          <div className="text-white text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 sm:mb-3">
            DON'T BE SHY!
          </div>
          <div className="text-white text-sm sm:text-[0.8rem] lg:text-[0.95rem] font-light italic sm:mr-16 mb-2 sm:mb-3">
            "Let's make something great together! Contact me for collaborations, freelance opportunities, or any inquiries about my work. I'm looking forward to hearing from you."
          </div>
          <div className="flex flex-row mb-3">
            <div className="flex flex-col">
              <div className="text-white font-medium">MAIL ME</div>
              <div className="text-white">mrunalijibhakate04@gmail.com</div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="text-white font-medium">CALL ME</div>
              <div className="text-white">+91-7517957468</div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-6 sm:mt-0 sm:w-1/2 justify-center items-center relative">
          <div className="absolute -top-6 sm:-top-14 -left-2 sm:left-6 z-30">
            <img src={V1} alt="" className="h-16 sm:h-auto" />
          </div>
          <div className="w-[28rem] h-[20rem] z-20">
            <Card />
          </div>
        </div>
      </div>

      <div className="flex flex-col relative">
        <div className="flex flex-row z-20 absolute mx-10 sm:mx-0 sm:left-16 top-24 md:left-20 lg:left-32 xl:left-40 sm:top-10 space-x-3 lg:space-x-6">
          <div className="bg-[#4933C2]  w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-xl">
            <a
              href="https://www.linkedin.com/in/mrunali-jibhakate-61879528b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Linkedln}
                className="object-cover w-full h-full rounded-xl px-3 py-3"
                alt="LinkedIn"
              />
            </a>
          </div>
          <div className="bg-[#4933C2] w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-xl">
            <a
              href="https://github.com/mrunali0204"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Github}
                className="object-cover w-full h-full rounded-xl bg-[#4933C2] px-3 py-3"
                alt="GitHub"
              />
            </a>
          </div>
          <div className="bg-[#4933C2] w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-xl">
            <a
              href="https://discord.com/channels/mrunali_0204"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Discord}
                className="object-cover w-full h-full rounded-xl px-3 py-3"
                alt="Discord"
              />
            </a>
          </div>
          <div className="bg-[#4933C2] w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-xl">
            <a
              href="https://www.instagram.com/mrunali.jibhakate?igsh=YzEwZXVtOXpoZ3hp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                className="object-cover w-full h-full rounded-xl px-3 py-3"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
        <div className="absolute z-0 top-32 sm:top-0">
          <img src={V2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
