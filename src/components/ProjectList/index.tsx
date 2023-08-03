import React, { useState, useEffect } from "react";
import { getAllProjects } from "../../utils/getAllProjects";
import { difficultyLevels } from "../../data";
import "./projectList.css";

export default function ProjectList() {
  const [search, setSearch] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(getAllProjects());
  const [checkedItens, setCheckedItens] = useState<number[]>([]);
  const [difficulty, setDifficulty] = useState({
    easy: false,
    medium: false,
    hard: false,
  });
  const handleDifficulty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const name = e.target.name;
    setDifficulty((oldState) => {
      return { ...oldState, [name]: isChecked };
    });
  };

  const handleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const isChecked = e.target.checked;

    setCheckedItens((oldState) => {
      return isChecked
        ? [...oldState, index]
        : oldState.filter((item: number) => item !== index);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let filtered = getAllProjects();
    if (search !== "") {
      filtered = getAllProjects().filter((project) => {
        return project.title.toLowerCase().includes(search.toLowerCase());
      });
    }

    // REFAC: Refactor this code
    if (difficulty.easy || difficulty.medium || difficulty.hard) {
      filtered = filtered.filter((project) => {
        if (
          difficulty.easy &&
          difficultyLevels["easy"] === project.difficulty
        ) {
          return true;
        }
        if (
          difficulty.medium &&
          difficultyLevels["medium"] === project.difficulty
        ) {
          return true;
        }
        if (
          difficulty.hard &&
          difficultyLevels["hard"] === project.difficulty
        ) {
          return true;
        }
        return false;
      });
    }
    setFilteredProjects(filtered);
  }, [search, difficulty]);

  return (
    <>
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="project name..."
        />
        <fieldset>
          <label>
            <input type="checkbox" name="easy" onChange={handleDifficulty} />
            Easy
          </label>
          <label>
            <input type="checkbox" name="medium" onChange={handleDifficulty} />
            Medium
          </label>
          <label>
            <input type="checkbox" name="hard" onChange={handleDifficulty} />
            Hard
          </label>
        </fieldset>
      </form>

      <div className="project-list ">
        {filteredProjects.map((project, index) => {
          return (
            <label htmlFor={`checkbox-${index}`}>
              <div className="project-card" key={project.title}>
                <input
                  id={`checkbox-${index}`}
                  name={`checkbox-${index}`}
                  type="checkbox"
                  onChange={(e) => handleCheckbox(e, index)}
                />
                <p
                  className={
                    checkedItens.includes(index) ? "project-card-checked" : ""
                  }
                >
                  {project.title}
                </p>
                <span className={`span-${project.difficulty}`}></span>
              </div>
            </label>
          );
        })}
      </div>
    </>
  );
}
