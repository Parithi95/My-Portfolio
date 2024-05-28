import React, { useState } from "react";
import TypeIt from "typeit-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [instance, setInstance] = useState(null);

  return (
    <>
      <section
        className=" bg-gradient-to-r from-blue-200 to-green-400 md:min-w-max h-full  "
        id="home"
      >
        <div className="container flex  justify-between items-start mx-auto w-screen min-h-screen min-w-max ">
          <div className=" grow mt-20 md:self-stretch flex justify-around max-w-full min-h-fit ">
            <div
              className=" grow my-20 mx-5 py-10 px-5 rounded-tr-full rounded-tl-full rounded-br-full flex justify-center items-center min-w-72  bg-center bg-cover"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/premium-photo/happy-cartoon-3d-programmer-hacker_1124848-5316.jpg)",

                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="grow my-20 mx-5 py-10 px-5 rounded-br-full rounded-bl-full rounded-tl-full flex justify-center items-center  min-w-72 bg-center bg-cover"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg)",

                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div className=" md:grow mt-20 flex justify-start self-stretch  ">
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
                <div className="group p-2  transparent border-2 border-l-rose-500 border-b-yellow-500 border-r-amber-500 border-t-pink-500 rounded-lg hover:border-white  hover:bg-yellow-400 cursor-pointer">
                  <FontAwesomeIcon
                    className="group-hover:text-white"
                    icon={faTwitter}
                    style={{ width: "35px", height: "35px" }}
                  />
                </div>
                <div className="group p-2 transparent border-2 border-l-rose-500 border-b-yellow-500 border-r-amber-500 border-t-pink-500 rounded-lg hover:border-white  hover:bg-yellow-400 cursor-pointer">
                  <FontAwesomeIcon
                    className="group-hover:text-white"
                    icon={faFacebook}
                    style={{
                      width: "35px",
                      height: "35px",
                    }}
                  />
                </div>
                <div className="group p-2 transparent border-2 border-l-rose-500 border-b-yellow-500 border-r-amber-500 border-t-pink-500 rounded-lg hover:border-white  hover:bg-yellow-400 cursor-pointer ">
                  <FontAwesomeIcon
                    className="group-hover:text-white"
                    icon={faInstagram}
                    style={{ width: "35px", height: "35px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
