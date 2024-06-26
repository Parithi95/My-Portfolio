import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const images = [
  {
    url1: "https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Hire_React_JS_Developers_e57bec9c4a.jpg",
  },
  {
    url1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOs08RER4WN-3bAvzn3ZCo1GhmZA0UKj6zTCaqX19qJ2JpxKujrnYpSiCpRAQZPzrXE8&usqp=CAU",
  },
  {
    url1: "data:image/jpeg;base64,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",
  },
  {
    url1: "https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Hire_React_JS_Developers_e57bec9c4a.jpg",
  },
];

export const homeImageUrl = [
  {
    imageUrl:
      "https://img.freepik.com/premium-photo/happy-cartoon-3d-programmer-hacker_1124848-5316.jpg",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg",
  },
];

export const homeIcons = [
  {
    iconName: faTwitter,
  },
  {
    iconName: faFacebook,
  },
  {
    iconName: faInstagram,
  },
];

export const jobDetails = [
  {
    icon: "http://www.w3.org/2000/svg",
    year: "2022 - 2024",
    job: " Customer Care Executive - GKB Hi Tech Lenses pvt ltd.,Coimbatore",
    description:
      "  Proven track record of providing exceptional customer service in fast-paced environments.Ability to empathize with customers, understand their needs, and provide tailored solutions.",
  },
  {
    icon: "http://www.w3.org/2000/svg",
    year: "2017 - 2021",
    job: "  Service Technician - Industrial Technoblitz, Chennai",
    description:
      "Conducted routine preventive maintenance to ensure optimal performance and longevity of equipment.Provided clear andconcise explanations to customers regarding issues and repairs, ensuring customer satisfaction.",
  },
];

export const projectDetails = [
  {
    projectName: " NETFLIX CLONE",
    details: [
      {
        key: "Browse & Search",
        description:
          "  Users can browse movies and TV shows categorized by genres.",
      },
      {
        key: " Front-end",
        description:
          "Built the user interface using React for efficient component-based development.",
      },
      {
        key: " State Management",
        description:
          "   Managed application state using Redux for a scalable state management solution.",
      },
      {
        key: "  Movie Details",
        description:
          "Clicking on a movie or TV show displays detailed information, including the title, description, rating, and trailer.",
      },
      {
        key: " Learning Outcomes",
        description:
          " Gained experience in specific technologies, e.g., React hooks, state management,TMDB API,Styled components, Norigin Media Spatial Navigation.",
      },
    ],
  },
  {
    projectName: "  ECOMMERCE",
    details: [
      {
        key: "Product Catalog",
        description:
          "Display products with detailed information, including images, descriptions, prices, and stock availability.",
      },
      {
        key: " Front-end",
        description:
          " React, Redux for state management, Styled components, React Router.",
      },
      {
        key: "User Authentication",
        description:
          " Secure user authentication with registration and login functionality.",
      },
      {
        key: "Shopping Cart",
        description:
          "  Users can add products to their cart, update quantities, and remove items.",
      },
      {
        key: " Learning Outcomes",
        description:
          " Enhanced understanding of pagination for large product catalogs,Tailwind Css, Third Party Library Integration customization",
      },
    ],
  },
  {
    projectName: "JOBSTER",
    details: [
      {
        key: " Job Search",
        description:
          "Users can search for jobs based on keywords, location, and job type.",
      },
      {
        key: " Front-end",
        description:
          "React, Redux for state management, Styled components,React Router.",
      },
      {
        key: "User Authentication",
        description:
          " Secure user authentication with registration and login functionality.",
      },
      {
        key: "Application Management",
        description:
          "Users can track their job applications and view application statuses.",
      },
      {
        key: " Learning Outcomes",
        description:
          " Enhanced understanding of RESTful API design and integration, React Query,Material UI.",
      },
    ],
  },
];

export const contactIcons = [
  {
    detail:
      "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    information: "+91 99402 74842",
  },
  {
    detail:
      "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
    information: " parithi95@gmail.com",
  },
  {
    detail:
      "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
    information: "Malleshpalaya, Bangalore",
  },
];
