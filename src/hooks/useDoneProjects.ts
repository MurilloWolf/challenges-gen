import useLocalStorage from "./useLocalStoage";

export default function useDoneProjects() {
  const [doneProjects, setDoneProjects] = useLocalStorage<number[]>(
    "doneProjects",
    []
  );

  const addDoneProject = (id: number) => {
    setDoneProjects([...doneProjects, id]);
  };

  const removeDoneProject = (id: number) => {
    setDoneProjects(doneProjects.filter((projectId) => projectId !== id));
  };

  const isDoneProject = (id: number) => {
    return doneProjects.includes(id);
  };

  return { doneProjects, addDoneProject, removeDoneProject, isDoneProject };
}
