import Project from "../models/Project.js";
import Task from "../models/Task.js";

const getProjects = async (req, res) => {
  const projects = await Project.find().where("creator").equals(req.user);
  res.json(projects);
};

const newProject = async (req, res) => {
  const project = new Project(req.body);
  project.creator = req.user._id;

  try {
    const storedProject = await project.save();
    res.json(storedProject);
  } catch (error) {
    console.log(error);
  }
};

const getProject = async (req, res) => {
  const { id } = req.params;

  const project = await Project.findById(id);

  if (!project) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Acción no Válida");
    return res.status(401).json({ msg: error.message });
  }

  // Obtener las tareas del proyecto

  const tasks = await Task.find().where("project").equals(project._id);

  res.json({
    project,
    tasks,
  });
};

const editProject = async (req, res) => {
  const { id } = req.params;

  const project = await Project.findById(id);

  if (!project) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Acción no Válida");
    return res.status(401).json({ msg: error.message });
  }

  project.name = req.body.name || project.name;
  project.descripton = req.body.descripton || project.descripton;
  project.deliveryDate = req.body.deliveryDate || project.deliveryDate;
  project.client = req.body.client || project.client;

  try {
    const storedProject = await project.save();
    res.json(storedProject);
  } catch (error) {
    console.log(error);
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;

  const project = await Project.findById(id);

  if (!project) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Acción no Válida");
    return res.status(401).json({ msg: error.message });
  }

  try {
    await project.deleteOne();
    res.json({ msg: "Proyecto Eliminado" });
  } catch (error) {
    console.log(error);
  }
};

const addCollaborator = async (req, res) => {};

const deleteCollaborator = async (req, res) => {};

export {
  getProjects,
  newProject,
  getProject,
  editProject,
  deleteProject,
  addCollaborator,
  deleteCollaborator,
};
