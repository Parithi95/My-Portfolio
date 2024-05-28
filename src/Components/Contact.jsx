import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section
      className=" h-screen min-h-screen   min-w-max "
      style={{
        background:
          "linear-gradient(90deg, rgba(35,189,181,1) 0%, rgba(16,61,154,1) 100%)",
      }}
      id="contact"
    >
      <div className=" container flex flex-col justify-start  mx-auto w-screen min-h-screen  min-w-max  ">
        <div className="mt-20">
          <div className="">
            <h1 className=" mx-5 text-xl font-semibold tracking-widest text-white">
              CONTACT ME
            </h1>
          </div>
        </div>

        <div className="mt-5  mx-5 grow  flex gap-5 ">
          <div
            className=" grow rounded bg-gray-300 "
            style={{
              background:
                "linear-gradient(90deg, rgba(35,189,181,1) 0%, rgba(16,61,154,1) 100%)",
            }}
          >
            <form action="" className="mx-5 mt-5 flex flex-col gap-8 ">
              <div className="flex justify-start gap-5">
                <div className=" grow py-1 ">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    className=" border-white border-2 px-4 py-4 rounded-full w-full text-xl  focus:outline-yellow-400 bg-transparent placeholder:text-white "
                  />
                </div>
                <div className="grow py-1 ">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    className="border-white border-2 px-4 py-4 rounded-full w-full text-xl  focus:outline-yellow-400 bg-transparent placeholder:text-white "
                  />
                </div>
              </div>
              <div className="">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter Your Subject"
                  className="border-white border-2 px-4 py-4 rounded-full w-full text-xl   focus:outline-yellow-400 bg-transparent placeholder:text-white"
                />
              </div>
              <div className="">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter Your Message"
                  className="border-white border-2  px-4 py-3 rounded w-full text-xl h-36  focus:outline-yellow-400 bg-transparent placeholder:text-white"
                ></textarea>
              </div>
              <div className="border-white border flex px-4 py-3 rounded justify-center text-xl gap-2 bg-yellow-500 w-60 hover:bg-green-500 transition-all ease-in-out duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8 -rotate-45 stroke-white stroke-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>

                <button
                  type="button"
                  className=" font-bold tracking-widest text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(35,189,181,1) 0%, rgba(16,61,154,1) 100%)",
            }}
            className=" grow p-4 bg-gray-200 rounded-lg"
          >
            <div>
              <h1 className="text-2xl font-bold tracking-widest text-white">
                Let's talk about everything!{" "}
              </h1>
            </div>
            <div>
              <p className="text-wrap mt-2 h-20 w-96 text-md font-bold tracking-widest text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore.Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit
              </p>
            </div>
            <div className="mt-14 flex flex-col">
              <div className="flex   p-3 gap-2">
                <div className="border-2 border-black rounded-full p-2 bg-yellow-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 stroke-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-md font-normal p-1 tracking-wider text-white">
                    +91 99402 74842
                  </p>
                </div>
              </div>
              <div className="flex p-3 gap-2">
                <div className="border-2 border-black rounded-full p-2 bg-yellow-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 stroke-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-md font-normal p-1 tracking-wider text-white">
                    parithi95@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex p-3 gap-2">
                <div className="border-2 border-black rounded-full p-2 bg-yellow-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 stroke-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-md font-normal p-1 tracking-wider text-white">
                    Malleshpalaya, Bangalore
                  </p>
                </div>
              </div>
              <div className="flex p-3 items-center gap-2">
                <div className="border-2 border-black rounded-full p-2 bg-yellow-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 stroke-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                </div>
                <div className=" flex  gap-5 ml-2">
                  <div className="group p-2  transparent   rounded-lg  hover:bg-yellow-300 cursor-pointer">
                    <FontAwesomeIcon
                      className="group-hover:text-white"
                      icon={faTwitter}
                      style={{ width: "25px", height: "25px" }}
                    />
                  </div>
                  <div className="group p-2 transparent  rounded-lg hover:bg-yellow-300 cursor-pointer">
                    <FontAwesomeIcon
                      className="group-hover:text-white"
                      icon={faFacebook}
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </div>
                  <div className="group p-2 transparent  rounded-lg  hover:bg-yellow-300 cursor-pointer ">
                    <FontAwesomeIcon
                      className="group-hover:text-white"
                      icon={faInstagram}
                      style={{ width: "25px", height: "25px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-lg mt-4 mx-5 grow flex items-center justify-center bg-gray-200"
          style={{
            background:
              "linear-gradient(90deg, rgba(35,189,181,1) 0%, rgba(16,61,154,1) 100%)",
          }}
        >
          <div>
            <p className="text-wrap mt-2 h-20 w-96 text-md text-white font-bold tracking-widest">
              © 2023 copyright all right reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
