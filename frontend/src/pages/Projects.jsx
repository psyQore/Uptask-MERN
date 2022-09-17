import React from "react";
import useProjects from "../hooks/useProjects";

const Projects = () => {
  const { projects } = useProjects();

  console.log(projects);

  return (
    <>
      <h1 className="text-4xl font-black">Proyectos</h1>

      <div className="bg-white shadow mt-10 rounded-lg p-5" >
        {projects.length ? (
          <p className="text-center text-gray-600 uppercase">Si hay Proyectos</p>
        ) : (
          <p>No hay Proyectos aún</p>
        )}
      </div>
    </>
  );
};

export default Projects;
