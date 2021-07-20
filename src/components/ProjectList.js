import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project)=> {
          console.log(project)
          return <ProjectItem name ={project.name} 
          key = {project.id} 
          technologies = {project.technologies}
          about = {project.about}
          />
        })}
      </div>
    </div>
  );
}

export default ProjectList;
