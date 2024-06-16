import React from "react";
import { projectDetails } from "../assets/Images/ImageUrl";

const Portfolio = () => {
  return (
    <section
      className=" bg-gradient-to-r from-pink-500 to-indigo-300 min-h-screen "
      id="portfolio"
    >
      <div className="  flex flex-col justify-between items-start mx-auto px-5 py-20  h-full">
        <div className="  px-10">
          <h1 className="text-black  text-xl font-semibold tracking-widest">
            MY PROJECTS
          </h1>

          <div className=" grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {projectDetails.map((project, projectIndex) => {
              return (
                <div
                  key={projectIndex}
                  className="text-center  group  rounded-lg border-2 shadow-lg shadow-orange-300 p-4  "
                >
                  <h2 className="text-black tracking-widest text-2xl font-bold p-2 font-serif group-hover:text-white  transition duration-700 ease-in-out shadow-md shadow-white">
                    {project.projectName}
                  </h2>
                  {project.details.map((detail, detailIndex) => {
                    return (
                      <div key={detailIndex} className="flex  justify-start">
                        <p className="text-black tracking-wider text-base basis-40 px-2 py-1  text-left ">
                          {detail.key}
                        </p>

                        <p className="text-black tracking-wider text-base w-72 grow px-2 py-1 text-left">
                          {detail.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
