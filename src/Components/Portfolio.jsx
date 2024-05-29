import React from "react";

const Portfolio = () => {
  return (
    <section
      className=" bg-gradient-to-r from-pink-500 to-indigo-300 min-h-screen min-w-max "
      id="portfolio"
    >
      <div className=" container flex justify-between items-start mx-auto w-screen min-h-screen min-w-max ">
        <div className=" mt-20">
          <div className="mt-5 ">
            <h1 className="text-black mx-5 text-xl font-semibold tracking-widest">
              MY PROJECTS
            </h1>
          </div>
          <div className=" mt-5 ml-8 grid grid-cols-3 ">
            <div className="group mx-2 my-2 flex flex-col rounded-lg border-2 shadow-lg shadow-orange-300  ">
              <div className="text-center mt-2">
                <h2 className="text-black tracking-widest text-4xl font-bold p-2 font-serif group-hover:text-white  transition duration-700 ease-in-out shadow-md shadow-white">
                  NETFLIX CLONE
                </h2>
              </div>
              <div className="p-3  ">
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base ">
                      Browse & Search
                    </p>
                  </div>
                  <div className=" grow py-2">
                    <p className="text-black tracking-wider text-base w-72">
                      Users can browse movies and TV shows categorized by
                      genres.
                    </p>
                  </div>
                </div>
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      Front-end
                    </p>
                  </div>
                  <div className=" grow py-2">
                    <p className="text-black tracking-wider text-base w-72">
                      Built the user interface using React for efficient
                      component-based development.
                    </p>
                  </div>
                </div>
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      State Management
                    </p>
                  </div>
                  <div className=" grow py-2">
                    <p className="text-black tracking-wider text-base w-72">
                      Managed application state using Redux for a scalable state
                      management solution.
                    </p>
                  </div>
                </div>
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      Movie Details
                    </p>
                  </div>
                  <div className=" grow py-2">
                    <p className="text-black tracking-wider text-base w-72">
                      Clicking on a movie or TV show displays detailed
                      information, including the title, description, rating, and
                      trailer.
                    </p>
                  </div>
                </div>
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      Learning Outcomes
                    </p>
                  </div>
                  <div className=" grow  ">
                    <p className="text-black tracking-wider text-base  w-72">
                      Gained experience in specific technologies, e.g., React
                      hooks, state management,TMDB API,Styled components,
                      Norigin Media Spatial Navigation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group mx-2 my-2 flex flex-col rounded-lg border-2 shadow-lg shadow-orange-300 ">
              <div className="text-center mt-2">
                <h2 className="text-black tracking-widest text-4xl font-bold p-2 font-serif group-hover:text-white  transition duration-700 ease-in-out shadow-md shadow-white ">
                  JOBSTER
                </h2>
              </div>
              <div className="p-3  ">
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      Job Search
                    </p>
                  </div>
                  <div className=" grow py-2">
                    <p className="text-black tracking-wider text-base w-72">
                      Users can search for jobs based on keywords, location, and
                      job type.
                    </p>
                  </div>
                </div>
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      Front-end
                    </p>
                  </div>
                  <div className=" grow py-2">
                    <p className="text-black tracking-wider text-base w-72">
                      React, Redux for state management, Styled components,
                      React Router.
                    </p>
                  </div>
                </div>
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      User Authentication
                    </p>
                  </div>
                  <div className=" grow py-2">
                    <p className="text-black tracking-wider text-base w-72">
                      Secure user authentication with registration and login
                      functionality.
                    </p>
                  </div>
                </div>
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      Application Management
                    </p>
                  </div>
                  <div className=" grow py-2">
                    <p className="text-black tracking-wider text-base w-72">
                      Users can track their job applications and view
                      application statuses.
                    </p>
                  </div>
                </div>
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      Learning Outcomes
                    </p>
                  </div>
                  <div className=" grow  ">
                    <p className="text-black tracking-wider text-base  w-72">
                      Enhanced understanding of RESTful API design and
                      integration, React Query,Material UI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group mx-2 my-2 flex flex-col rounded-lg border-2 shadow-lg shadow-orange-300">
              <div className="text-center mt-2">
                <h2 className="text-black tracking-widest text-4xl font-bold p-2 font-serif group-hover:text-white  transition duration-700 ease-in-out shadow-md shadow-white ">
                  ECOMMERCE WEBSITE
                </h2>
              </div>
              <div className="p-3  ">
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      Product Catalog
                    </p>
                  </div>
                  <div className=" grow py-2">
                    <p className="text-black tracking-wider text-base w-72">
                      Display products with detailed information, including
                      images, descriptions, prices, and stock availability.
                    </p>
                  </div>
                </div>
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      Front-end
                    </p>
                  </div>
                  <div className=" grow py-2">
                    <p className="text-black tracking-wider text-base w-72">
                      React, Redux for state management, Styled components,
                      React Router.
                    </p>
                  </div>
                </div>
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      User Authentication
                    </p>
                  </div>
                  <div className=" grow py-2">
                    <p className="text-black tracking-wider text-base w-72">
                      Secure user authentication with registration and login
                      functionality.
                    </p>
                  </div>
                </div>
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      Shopping Cart
                    </p>
                  </div>
                  <div className=" grow py-2">
                    <p className="text-black tracking-wider text-base w-72">
                      Users can add products to their cart, update quantities,
                      and remove items.
                    </p>
                  </div>
                </div>
                <div className="flex  justify-start">
                  <div className=" basis-40 py-2">
                    <p className="text-black tracking-wider text-base">
                      Learning Outcomes
                    </p>
                  </div>
                  <div className=" grow  ">
                    <p className="text-black tracking-wider text-base  w-72">
                      Enhanced understanding of pagination for large product
                      catalogs,Tailwind Css, Third Party Library Integration
                      customization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
