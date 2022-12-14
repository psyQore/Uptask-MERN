import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useProjects from "../hooks/useProjects";

const Project = () => {
  const params = useParams();

  const { getProject, project, loading } = useProjects();

  useEffect(() => {
    getProject(params.id);
  }, []);

  const { name } = project;

  if (loading) return "Cargando..";

  return (
    <div className="flex justify-between">
      <h1 className="font-black text-4xl">{name}</h1>

      <div className="flex items-center gap-2 text-gray-400 hover:text-black">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
        <Link
          to={`/projects/edit/${params.id}`}
          className="uppercase font-bold"
        >
          Editar
        </Link>
      </div>
    </div>
  );
};

export default Project;
