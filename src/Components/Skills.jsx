import React from "react";
import { skills } from "../assets/Constants/constant";

const Skills = () => {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-r to-sky-300 from-green-500 "
      id="skills"
    >
      <div className="container  mx-auto px-5 ">
        <h1 className="text-3xl  mx-10 px-8 font-bold tracking-widest text-white">
          SKILLS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border-4  border-l-rose-500 border-b-yellow-500 border-r-amber-500 border-t-pink-500 rounded-3xl mx-5 p-5  hover:bg-indigo-800 hover:border-white hover:scale-110 bg-sky-950 shadow-indigo-500/50 shadow-inner transition duration-1000 ease-in-out"
            >
              <div className="flex flex-col items-center">
                <div className="flex justify-between gap-5">
                  <div className="w-20 h-20 mb-4">
                    <img
                      className="w-full h-full object-contain"
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                    />
                  </div>
                  <div>
                    <h1 className="mt-4 text-2xl font-bold tracking-widest text-white mb-4 text-center">
                      {skill.name}
                    </h1>
                  </div>
                </div>

                <ul className="text-left text-white">
                  {skill.keyPoints.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
