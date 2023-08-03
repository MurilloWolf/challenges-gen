import { Gear } from "@phosphor-icons/react";
import { useReducer, useState } from "react";
import reducer, { ActionTypes } from "./reducer";
import { getRandomChallenge } from "../../utils/randomChallenge";
import DifficultyLevel from "../../data/difficultyLevels";
export default function RandomChallenge() {
  const initialState = {
    punishmentLevel: "all",
    projectLevel: "all",
  };
  const dificultyLevels = ["easy", "medium", "hard", "all"];

  const [state, dispatch] = useReducer(reducer, initialState);
  const [challenge, setChallenge] = useState<any>(null);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    dispatch({
      type: name as keyof typeof ActionTypes,
      payload: value,
    });
  };

  const generateOptions = () =>
    dificultyLevels.map((level) => (
      <option key={level} value={level}>
        {level}
      </option>
    ));

  const handleGenerate = () => {
    // @ts-nocheck
    const obj = getRandomChallenge(
      DifficultyLevel[state.projectLevel],
      DifficultyLevel[state.punishmentLevel] || "all"
    );
    setChallenge(obj);
    console.log(obj);
  };

  return (
    <div>
      <h1>Random Chanllenge</h1>
      <form>
        <div>
          {challenge && (
            <>
              <label>Challenge</label>
              <p>Project: {challenge.project.title}</p>
              {challenge.punishment && (
                <p>Punishment: {challenge.punishment.title}</p>
              )}
            </>
          )}
        </div>

        <button type="button" onClick={handleGenerate}>
          Generate Challenge
        </button>
        <div>
          <Gear size={32} />
          <label>Settings</label>
          <select
            name={ActionTypes.SET_PUNISHMENT_DIFFICULTY}
            value={state.punishmentLevel}
            onChange={handleChange}
          >
            <option value="none">Without Punishment</option>
            {generateOptions()}
          </select>
          <select
            name={ActionTypes.SET_PROJECT_DIFFICULTY}
            value={state.projectLevel}
            onChange={handleChange}
          >
            {generateOptions()}
          </select>
        </div>
      </form>
    </div>
  );
}
