import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  {
    id: 1,
    title: "Foodmania",
    description: "Project1 desc",
    images: "/images/projects/OIG2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Larryking007/Foodmania.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Qrcode generator",
    description: "Project2 desc",
    images: "/images/projects/R.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "HairDay",
    description: "Project3 desc",
    images: "/images/projects/wp6771.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Larryking007/hairday.git",
    previewUrl: "https://larryking007.github.io/hairday/",
  },
  {
    id: 4,
    title: "Image Gallery",
    description: "Project4 desc",
    images: "/images/projects/OIG1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Password Generator",
    description: "Project5 desc",
    images: "/images/projects/P.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "School timetable",
    description: "Project6 desc",
    images: "/images/projects/OIP.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <section ref={ref}>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
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
      </section>
    </>
  );
};

export default ProjectSection;
