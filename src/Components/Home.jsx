import React, { useState } from "react";
import TypeIt from "typeit-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { homeImageUrl, homeIcons } from "../assets/Images/ImageUrl";

const Home = () => {
  const [instance, setInstance] = useState(null);

  return (
    <>
      <section
        className=" bg-gradient-to-r from-blue-200 to-green-400  h-full mx-auto  "
        id="home"
      >
        <div className=" flex  justify-between items-start mx-auto  min-h-screen ">
          <div className=" grow mt-20 md:self-stretch flex justify-around max-w-full ml-20 gap-5">
            {homeImageUrl.map((image, index) => (
              <div
                key={index}
                className=" grow my-20 mx-5   rounded-tr-full rounded-tl-full rounded-br-full flex justify-center items-center min-w-56  bg-center bg-cover"
                style={{
                  backgroundImage: `url(${image.imageUrl})`,

                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            ))}
          </div>
          <div className=" md:grow mt-20 flex justify-start self-stretch mx-20">
            <div className=" my-20 flex flex-col items-start justify-center max-w-md  p-6 ml-5 ">
              <div className="flex gap-x-1">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10 stroke-white fill-yellow-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                <div className="  text-center  ">
                  <p className="p-2 text-2xl font-normal text-white">Hi, I'm</p>
                </div>
              </div>
              <div>
                <h1 className="text-6xl py-4 text-white tracking-wider">
                  Elamparithi
                </h1>
              </div>
              <div>
                <TypeIt
                  className="p-2 text-2xl font-normal text-white tracking-wide "
                  options={{ loop: true }}
                  getAfterInit={(instance) => {
                    setInstance(instance);
                    return instance;
                  }}
                >
                  I am a Front End Developer
                </TypeIt>
              </div>
              <div className="h-20 mt-5">
                <p className="text-wrap text-lg font-normal text-white tracking-wider">
                  A lifelong learner committed to staying current with the
                  latest industry trends and advancements.
                </p>
              </div>
              <div className="mt-5 flex self-stretch gap-5 ">
                {homeIcons.map((icons, index) => (
                  <div
                    key={index}
                    className="group p-2  transparent border-2 border-l-rose-500 border-b-yellow-500 border-r-amber-500 border-t-pink-500 rounded-lg hover:border-white  hover:bg-yellow-400 cursor-pointer"
                  >
                    <FontAwesomeIcon
                      className="group-hover:text-white"
                      icon={icons.iconName}
                      style={{ width: "35px", height: "35px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
