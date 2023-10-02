import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectData = [
  {
    id: 1,
    title: "Food App",
    description: "",
    images: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Calculator",
    description: "",
    images: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Firebase",
    description: "",
    images: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Image Gallery",
    description: "",
    images: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Password Generator",
    description: "",
    images: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Url Shortner",
    description: "",
    images: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {ProjectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.images}
            tag={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          >
            {" "}
          </ProjectCard>
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
