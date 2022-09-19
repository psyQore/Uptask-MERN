import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProjects from "../hooks/useProjects";

const Project = () => {
  const params = useParams();

  const { getProject, project, loading } = useProjects();

  useEffect(() => {
    getProject(params.id);
  }, []);

  const { name } = project;

  return loading ? (
    "Cargando.."
  ) : (
    <div>
      <h1 className="font-black text-4xl">{name}</h1>
    </div>
  );
};

export default Project;
