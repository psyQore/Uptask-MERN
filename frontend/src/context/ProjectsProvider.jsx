import { useState, useEffect, createContext } from "react";
import clientAxios from "../config/clinetAxios";

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [alert, setAlert] = useState([]);

  const showAlert = (alert) => {
    setAlert(alert);

    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

  const submitProject = async project => {
    console.log(project);
  };

  return (
    <ProjectsContext.Provider
      value={{ projects, showAlert, alert, submitProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider };

export default ProjectsContext;
