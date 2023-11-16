import React from "react";
import ProjectCard from "../components/Project/ProjectCard";
import "./projects.css";
import PWA from "../assets/app-images/PWA.jpg";
import SocialNetwork from "../assets/app-images/social-network.jpg";
import ECommerceBackend from "../assets/app-images/ecommerce.jpg";
import EmployeeTracker from "../assets/app-images/employee-tracker.jpg";

const projectData = [
  {
    title: "PWA Text Editor",
    description: "Text editor web application",
    imageUrl: PWA,
    url: "https://github.com/hailey-strauss/text-editor",
    site: "Not Available",
  },
  {
    title: "Social Network API",
    description: "A command line invoked network api",
    imageUrl: SocialNetwork,
    url: "https://github.com/jenstem/social-network-api",
    site: "Not Available",
  },

  {
    title: "E-Commerce Backend",
    description: "Express.js API",
    imageUrl: ECommerceBackend,
    url: "https://github.com/hailey-strauss/e-commerce-backend",
    site: "Not Available",
  },
  {
    title: "Employee Tracker",
    description: "Command line application",
    imageUrl: EmployeeTracker,
    url: "https://github.com/hailey-strauss/employee-tracker",
    site: "Not Available",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="projects-container">
      <h2 className="portfolio-size">My Portfolio</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard project={project} />
        ))}
      </div>
      <div className="add-space"></div>
      <div className="bar"></div>
    </div>
  );
}
