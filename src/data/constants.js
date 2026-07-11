import jobspireImg from '../assets/projects/jobspire.png';
// import artStoreImg from '../assets/projects/alsinic.png';
import cafeImg from '../assets/projects/cafe.jpeg';
// import portfolioImg from '../assets/projects/portfolio.png';
import artstoreImg from '../assets/projects/art-store.png';
import portfolioImg from '../assets/projects/portfolio.png';

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About Me" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact Me" },
];

export const skills = [
  { name: "React JS", iconId: "react", percentage: "90%" },
  { name: "JavaScript", iconId: "js", percentage: "85%" },
  { name: "Tailwind CSS", iconId: "tailwind", percentage: "95%" },
  { name: "Responsive Design", iconId: "responsive", percentage: "95%" },
  { name: "HTML5 & CSS3", iconId: "html", percentage: "95%" },
  { name: "SQL", iconId: "sql", percentage: "83%" },
  { name: "Bootstrap", iconId: "bootstrap", percentage: "90%" },
  { name: "Git & GitHub", iconId: "git", percentage: "85%" },
  { name: "Node.js", iconId: "node", percentage: "80%" },
  { name: "Express.js", iconId: "express", percentage: "75%" },
  { name: "MongoDB", iconId: "mongodb", percentage: "85%" },
  { name: "Figma", iconId: "figma", percentage: "90%" },
];

export const projects = [
  {
    name: "JobSpire",
    description: "A modern job portal frontend for job seekers to browse and apply for opportunities seamlessly.",
    image: jobspireImg, 
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    github: "https://github.com/Ishwariwadnare/Jobspire-job-portal",
    live: "https://ishwari-job-portal.netlify.app/login.html"
  },

  {
    name: "DemoCafe",
    description: "A smart cafe management landing page designed with a dynamic and user-friendly menu system.",
    image: cafeImg, 
    tags: [ "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Ishwariwadnare/Democafe",
    live: "https://ishwariwadnare.github.io/Democafe/index.html"
  },

   {
    name: "Portfolio",
    description: "A modern portfolio website showcasing my skills and projects.",
    image: portfolioImg, 
    tags: [ "HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/Ishwariwadnare/Portfolio",
    live: "https://portfolio-about-ishwari.netlify.app/"
  },

{
  name: "Alsinic Art",
  description: "A full-stack e-commerce platform for handmade and personalized gifts. Features include product browsing, category filtering, wishlist, shopping cart, admin dashboard, user authentication, and SQL database integration for product management.",
  image: artstoreImg,
  tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "JavaScript"],
  github: "https://github.com/Ishwariwadnare/Alsinic-art-project",
  
},
];