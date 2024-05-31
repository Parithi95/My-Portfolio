import { useState } from "react";
import React from "react";
import TypeIt from "typeit-react";
import resume from "../assets/Images/Elamparithi_ReactDev.pdf.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [instance, setInstance] = useState(null);

  return (
    <section
      className=" bg-gradient-to-r from-pink-300 to-gray-300  h-screen min-h-screen w-full"
      id="about"
    >
      <div className="  container flex justify-between items-start mx-auto  h-full   ">
        <div className="  mt-20 grow self-stretch p-5 flex flex-col max-w-3xl overflow-scroll no-scroll ml-20 ">
          <div className="  flex flex-col ">
            <div className="flex mx-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8 stroke-slate-50 stroke-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                  />
                </svg>
              </div>
              <h1 className=" mx-5 text-xl font-semibold tracking-widest">
                ABOUT ME
              </h1>
            </div>
            <div className="">
              <h1 className="p-3 mx-5 text-xl font-semibold tracking-wider text-balance">
                MY NAME IS ELAMPARITHI
              </h1>
            </div>
            <div className=" h-18 mt-8">
              <TypeIt
                className="p-3 mx-5 text-xl font-semibold tracking-wider "
                options={{ loop: true }}
                getAfterInit={(instance) => {
                  setInstance(instance);
                  return instance;
                }}
              >
                I AM AVAILABLE FOR FRONT END DEVELOPMENT PROJECTS
              </TypeIt>
              {/* <h1 className="p-3 mx-5 text-2xl font-semibold tracking-wider text-wrap">
                I AM AVAILABLE FOR UI/UX DESIGN PROJECTS
              </h1> */}
            </div>
            <div className="mt-2">
              <p className="p-2 mx-5 text-xl">
                Born in April 1995, a passionate and dedicated front-end
                developer with a knack for crafting visually appealing and
                user-centric web experiences.
              </p>
            </div>
            <div className="border-2 mt-4"></div>
          </div>
          <div className="grow">
            <div className="flex mx-4 gap-5 my-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8 stroke-slate-50 stroke-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-widest">
                  EXPERIENCE
                </h1>
              </div>
            </div>

            <div className="flex px-5 gap-8 mx-5 border-2 p-5 rounded-lg border-white bg-pink-100 shadow-xl shadow-red-200">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-12 border-2 rounded-full p-2 bg-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <p>2022 - 2024</p>
                </div>
                <div>
                  <h1 className="  text-xl font-semibold tracking-wider">
                    Customer Care Executive - GKB Hi Tech Lenses pvt ltd.,
                    Coimbatore
                  </h1>
                </div>
                <div>
                  <p className="  text-base tracking-wide">
                    Proven track record of providing exceptional customer
                    service in fast-paced environments.Ability to empathize with
                    customers, understand their needs, and provide tailored
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex px-5 gap-8 mx-5 my-4 border-2 p-5 mt-4 rounded-lg border-white bg-pink-100 shadow-xl shadow-red-200">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-12 border-2 rounded-full p-2 bg-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2 ">
                <div>
                  <p>2017 - 2021</p>
                </div>
                <div>
                  <h1 className="  text-xl font-semibold tracking-wider">
                    Service Technician - Industrial Technoblitz, Chennai
                  </h1>
                </div>
                <div>
                  <p className="  text-base tracking-wide">
                    Conducted routine preventive maintenance to ensure optimal
                    performance and longevity of equipment.Provided clear and
                    concise explanations to customers regarding issues and
                    repairs, ensuring customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 grow self-stretch p-5  flex flex-col mr-20 ">
          <div className=" flex gap-5 ">
            <div className=" grow w-52  ">
              <img
                className="w-full rounded-3xl "
                src="https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg"
                alt=""
              />
            </div>
            <div className=" grow flex flex-col gap-2 justify-center ">
              <div className="group mt-2 mx-2 flex border-2 rounded-2xl shadow-xl cursor-pointer bg-yellow-400 hover:bg-green-600 hover:border-3  transition duration-700 ease-in-out">
                <div className="mx-3 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8 group-hover:stroke-white stroke-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="p-2 text-xl font-normal group-hover:text-white ">
                  <a href="mailto:parithi95@gmail.com">Mail</a>
                </div>
              </div>

              <div className=" group mt-2 mx-2 flex border-2 rounded-2xl shadow-xl cursor-pointer bg-yellow-400 hover:bg-green-600 hover:border-3  transition duration-700 ease-in-out">
                <div className="mx-3 p-2">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="size-7 group-hover:text-white stroke-2"
                  />
                </div>
                <div className="p-2  text-xl font-normal group-hover:text-white">
                  <a href="https://www.linkedin.com/in/elamparithi-u-5341a6233/">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className=" group mt-2 mx-2 flex border-2 rounded-2xl shadow-xl cursor-pointer bg-yellow-400 hover:bg-green-600 hover:border-3  transition duration-700 ease-in-out">
                <div className="mx-3 p-2">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="size-8 group-hover:text-white stroke-2"
                  />
                </div>
                <div className="p-2  text-xl font-normal group-hover:text-white">
                  <a href="https://github.com/Parithi95">Github</a>
                </div>
              </div>
              <div className=" group mt-2 mx-2 flex border-2 rounded-2xl shadow-xl cursor-pointer bg-yellow-400 hover:bg-green-600 hover:border-3  transition duration-700 ease-in-out">
                <div className="mx-3 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8 group-hover:stroke-white stroke-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                </div>
                <div className="p-2  text-xl font-normal group-hover:text-white">
                  <a href={resume} download={"Elamparithi-Resume"}>
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
