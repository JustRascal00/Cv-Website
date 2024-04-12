import {
    mobile,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    github,
    threejs,
    developer,
    personal,
    Cplus,
    Python,
    SQL,
    Website,
    Website1,
    Website2,
    Website3,
    PHP,
    Laravel,
    Postman,
    Docker,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software developer",
      icon: mobile,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Cplus",
      icon: Cplus,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "SQL",
      icon: SQL,
    },
    {
      name: "PHP",
      icon: PHP,
    },
    {
      name: "Docker",
      icon: Docker,
    },
    {
      name: "Postman",
      icon: Postman,
    },
    {
      name: "Laravel",
      icon: Laravel,
    },
  ];
  
  const experiences = [
    {
      title: "Experiences",
      icon: developer,
      iconBg: "#383E56",
      date: "",
      points: [
        "Worked as a freelancer on sites like: freelancer.com/upwork.com",
        "Created this site",
        "Created discord Music bot using python",
        "I have completed several programming and development courses"
      ],
    },
    {
      title: "personal qualities",
      icon: personal,
      iconBg: "#E6DEDD",
      points: [
        "Strong analytical and solving the problemability",
        "Quick learning ability and motivated on the news",
        "Responsible and dedicated",
        "Strong attention to detail",
        "Self motivated"
      ],
    },
  ];
  const projects = [
    {
      name: "Website",
      description:
        "An e-commerce website that I built i only do home page and cart page but it is my work .",
      tags: [
        {
          name: "Css",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: Website,
      source_code_link: "https://github.com/JustRascal00/e-commerce-website",
    },
    {
      name: "ChatApp",
      description:
        "Chatapp which includes database and alot of other stuff and also is deployed in vercel",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Pusher for realtime messages",
          color: "orange-text-gradient",
        },
        {
          name: "Tailwind",
          color: "text-teal-200",
        },
      ],
      image: Website1,
      source_code_link: "https://github.com/JustRascal00/chatapp",
    },
    {
      name: "RoomChat",
      description:
      "Simple ChatRoom with PHP database, also demo is on (chatroomrascal.free.nf)",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Css",
          color: "orange-text-gradient",
        },
      ],
      image: Website2,
      source_code_link: "https://github.com/JustRascal00/chatroom",
    },
    {
      name: "RasApp",
      description:
      "WhatApp clone using postgresql database with features like: voicemessage,Search Messages,Voice Call and Video Call and many more",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Socket.io",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "orange-text-gradient",
        },
        {
          name: "firebase",
          color: "text-firebase",
        },
      ],
      image: Website3,
      source_code_link: "https://github.com/JustRascal00/rasapp",
    },
      
    
];
  export { services, technologies, experiences, projects}