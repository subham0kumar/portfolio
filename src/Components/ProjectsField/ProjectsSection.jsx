import React from "react";
import "./ProjectsSection.css";
import ProjectCard from "../Utility/ProjectCard/ProjectCard";

const projects = [
  {
    id: "1",
    imgURL: "src/assets/project photos/AniBuy Homepage.png",
    title: "AniBuy - Ecommerce platform",
    description:
      "Built and Deployed Anime e-commerce platform crafted with React.js and Tailwind CSS for a vibrant, user-friendly experience. Upcoming features include secure authentication, payment gateway, personalized Wishlist, and expanded database with diverse anime collection.",
    duration: "Nov 2023 - Dec 2023",
  },

  {
    id: "2",
    imgURL: "src/assets/project photos/CryptoTracker Homepage.png",
    title: "Crypto-Tracker - Crypto Currency List",
    description:
      "React-based Crypto Tracker app, powered by React hooks, Material-UI v5, and CoinGecko API, it provides real-time crypto data. Firebase integration ensures secure authentication and watchlist features.",
    duration: "Sep 2023 - Oct 2023",
  },

  {
    id: "3",
    imgURL: "src/assets/project photos/todo Page.png",
    title: "Todo List",
    description:
      "A React.js project the uses React hooks and component-based concepts the View, Add, Edit and Delete the ToDo tasks of the day",
    duration: "Jul 2023 - Jul 2023",
  },

  {
    id: "4",
    imgURL: "src/assets/project photos/NitFlex Homepage.png",
    title: "NETFLIX LANDING PAGE",
    description:
      "A Netflix landing page clone that uses basic React.js hooks and an API for the various categories and types of movies to be displayed on the landing page, also uses a React.js library that allows the trailer to play in YouTube player.",
    duration: "May 2023 - Jun 2023",
  },
];

const ProjectsSection = () => {
  return (
    <div className="h-fit flex justify-center">
      <div className="text-center w-[80vw]">
        <span className="text-[6rem] font-acorn_sb ">My Projects</span>
        <div className="grid grid-cols-2 items-start justify-center gap-10">
          {projects.map((project, i) => (
            <ProjectCard
              title={project.title}
              desc={project.description}
              duration={project.duration}
              img = {project.imgURL}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
