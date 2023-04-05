import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "PWA Developer",
      icon: mobile,
    },
    {
      title: "Front-end Developer",
      icon: backend,
    },
    {
      title: "Digital Creator",
      icon: creator,
    },
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Media Designer",
      company_name: "Livewall",
      icon: javascript,
      iconBg: "#383E56",
      date: "September 6 - Januari 1 2023",
      points: [
        "In these five months we managed to come with a digital concept for livewall",
        "Our group picked a digital substitution case, in where we made some research on making a pet recommendation website",
        "This goal with this website, was to reduce the difficulties that people have with taking care of a pet",
        "So by providing them with their best pet, we reduce the chances that someone might abandon theirs.",
        "I helped with researching and also designing,by prototyping and coding the recommendation part of this website",
      ],
    },
    {
      title: "Media Designer",
      company_name: "Maaike Girardin",
      icon: javascript,
      iconBg: "#383E56",
      date: "February 9 - September 2022",
      points: [
        "In these seven months we had the opportunity to work with Maaike Girardin, an upcoming Artist",
        "We had to come up with a solution for her older website, since she did not really like the design",
        "For this, we had to do interviews, online research and also dive into designining prototyping and coding.",
        "We delivered a pretty nice project to this artist, which included some of her latest albums",
      ],
    },
    {
      title: "PWA Developer",
      company_name: "Fontys",
      icon: javascript,
      iconBg: "#E6DEDD",
      date: "February 7  - March 16 2023",
      points: [
        "For the start of our fourth semester , we had the opportunity to work on a fitness gaming application for our PWA Developing skills",
        "I collaborated with my colleague (Ivan) to bring a fun but also effective solution in motivating students our age to do more chores",
        "This is necessary to keep a balance in our daily lives. We managed this by doing online research on motivation and also the effect of gaming",
        "We both managed with the design and also coding part of the application, such as making vibration, notifications and also phone compatability.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Petica",
      description:
        "Petica was a website that we made in our third semester for our client LiveWall.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };