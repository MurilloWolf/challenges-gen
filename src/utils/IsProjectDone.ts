import { Data } from "../types/data";

const getProjectsNotDone = (projectId: number[], projectList: Data[]) => {
  return projectList.filter((project) => projectId.includes(project.id));
};

const getProjectsDone = (projectId: number[], projectList: Data[]) => {
  return projectList.filter((project) => !projectId.includes(project.id));
};

export { getProjectsDone, getProjectsNotDone };
