import React from "react";
import Star from "../assets/Star.png";
import List from "./list";
import V2 from "../assets/V2.png";

const eduInfo = [
    {
        key:1,
        year:2027,
        title:"Yashwantrao Chavan College of Engineering,Nagpur",
        specification:"B.Tech in Electronics Engineering",
        grade:"8.50/10 CGPA"
    },
    {
        key:2,
        year:2022,
        title:"Dr. Babasaheb Ambedkar College of Arts, Commerce & Science, Brahmapuri",
        specification:"Board of Intermediate Education, Maharashtra",
        grade:"Percentage : 80"
    },
    {
        key:3,
        year:2020,
        title:"Christanand School & Jr.College, Brahmapuri",
        specification:"Board of Secondary Education",
        grade:"Percentage : 93.40"
    }
];

function Education(){
    return(
        <div className="flex flex-col mt-6 justify-center items-center">
            <div className="flex justify-center items-center">
                <div><img src={Star} alt="" className="h-8 sm:h-auto"></img></div>
                <div className="text-white text-xl sm:text-2xl lg:text-3xl mx-2 font-medium">EDUCATION</div>
                <div><img src={Star} alt="" className="h-8 sm:h-auto"></img></div>
            </div>
            <div className="mt-10 mx-8 sm:mx-20">
                {eduInfo.map((items) => (
                    <List 
                        key={items.key}
                        year={items.year}
                        title={items.title}
                        specification={items.specification}
                        grade={items.grade}
                    />
                ))}
            </div>
            <div>
                <img src={V2} alt="" className="w-20 sm:w-auto"></img>
            </div>
        </div>
    )
}
export default Education;