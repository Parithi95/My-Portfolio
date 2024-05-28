import React from "react";
import { skills } from "../assets/Constants/constant";

const Skills = () => {
  return (
    <section
      className="h-screen bg-gradient-to-r to-sky-300 from-green-500 min-w-max"
      id="skills"
    >
      <div className="container flex justify-between items-start mx-auto w-screen h-full min-w-max">
        <div className="mt-20 mx-12">
          <h1 className="text-3xl mt-6 mx-10 px-8 font-bold tracking-widest text-white">
            SKILLS
          </h1>
          <div className="mt-5 mx-10 grid grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="border-4  border-l-rose-500 border-b-yellow-500 border-r-amber-500 border-t-pink-500 rounded-3xl mx-5 p-5  hover:bg-indigo-800 hover:border-white hover:scale-110 bg-sky-950 shadow-indigo-500/50 shadow-inner transition duration-1000 ease-in-out"
              >
                <div className="flex flex-col">
                  <div className="flex  justify-between gap-10">
                    <div className="w-20 h-20 ">
                      <img
                        className="w-full h-full"
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                      />
                    </div>
                    <div>
                      <h1 className="mt-4 text-2xl font-bold tracking-widest text-white text-wrap">
                        {skill.name}
                      </h1>
                    </div>
                  </div>

                  <ul className="mt-5 text-white">
                    {skill.keyPoints.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
