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
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'TigerIT Bangladesh Ltd',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'September 2017 - December 2021',
    points: [
      'Skilled in handling complex projects involving Verification, Identification, Biometric Enrollment, and Data Migration.',
      'Experienced in creating exceptional user experiences using React, Redux, TypeScript, and Next.js, with expertise in building reusable and scalable code using custom hooks.',
      'Integrated Google Maps API to provide location-based functionalities and enhance user experience.',
      'Proficient in building high-performance and scalable backend systems using Node.js/Express, Spring Boot and microservices.',
      'Proven ability to ensure system reliability and efficiency through Unit testing and load/concurrency testing using tools such as JMeter.',
      'Proficient in deploying and managing systems in a scalable and efficient manner using Docker and cloud technologies such as Azure and AWS.',
      'Skilled in working with various types of databases, including NoSQL and relational databases, and proficient in data scaling for efficient handling of data-intensive projects.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'Siemens AG',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'March 2022 - Present',
    points: [
      'Developed advanced "Always Encrypted" and "Always Encrypted with Secure Enclaves" features using Node.js to safeguard sensitive data.',
      'Showcased expertise in cloud-based solutions by implementing RESTful services for authorization in the Siemens application using Azure.',
      'Currently leading a high-profile icon plugin project with easy icon search, color customization, and one-click download capabilities.',
      'Proficient in working with external data sources and APIs, as demonstrated by leveraging data from Iconify to build a robust icon plugin.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Pixabay Image Gallery',
    description:
      'This is a simple gallery of high-quality images built using React and powered by the Pixabay API. The gallery features a search function, quick load times, and a modern interface designed with Tailwind CSS. It is perfect for designers, bloggers, and art lovers looking for inspiration.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link:
      'https://github.com/shahariartushar/react-tailwind-pixabay-gallery',
  },
  //   {
  //     name: 'Job IT',
  //     description:
  //       'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
  //     tags: [
  //       {
  //         name: 'react',
  //         color: 'blue-text-gradient',
  //       },
  //       {
  //         name: 'restapi',
  //         color: 'green-text-gradient',
  //       },
  //       {
  //         name: 'scss',
  //         color: 'pink-text-gradient',
  //       },
  //     ],
  //     image: jobit,
  //     source_code_link: 'https://github.com/',
  //   },
  //   {
  //     name: 'Trip Guide',
  //     description:
  //       'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //     tags: [
  //       {
  //         name: 'nextjs',
  //         color: 'blue-text-gradient',
  //       },
  //       {
  //         name: 'supabase',
  //         color: 'green-text-gradient',
  //       },
  //       {
  //         name: 'css',
  //         color: 'pink-text-gradient',
  //       },
  //     ],
  //     image: tripguide,
  //     source_code_link: 'https://github.com/',
  //   },
];

export { services, technologies, experiences, testimonials, projects };
