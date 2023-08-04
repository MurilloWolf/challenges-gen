import { useState } from "react";
import { Gear } from "@phosphor-icons/react";
import useChallenges from "../../hooks/useChallenges";
import "./settings.css";

export default function Settings() {
  const difficultyLevels = ["easy", "medium", "hard"];
  const [showOptions, setShowOptions] = useState(false);
  const { changeDifficultyFrom, projectLevels, punishmentLevels } =
    useChallenges();

  const generateCheckBox = (controllerName: string) => {
    const checkList = difficultyLevels.map((level) => (
      <label key={level}>
        <input
          type="checkbox"
          value={level}
          onChange={(e) => changeDifficultyFrom(e, controllerName)}
        />
        {level}
      </label>
    ));
    return checkList;
  };

  return (
    <div className="circle-button-container">
      <p>Project Levels:{projectLevels.toString()}</p>
      <p>Punishment Levels:{punishmentLevels.toString()}</p>

      <button
        type="button"
        className="circle-button"
        onClick={() => setShowOptions(!showOptions)}
      >
        <Gear size={32} />
      </button>
      {
        <div className={`other settings--${showOptions ? "show" : "hide"}`}>
          <fieldset>
            <legend>Project Difficulty</legend>
            {generateCheckBox("projectLevels")}
          </fieldset>
          <fieldset>
            <legend>Punishment Difficulty</legend>
            {generateCheckBox("punishmentLevels")}
          </fieldset>
        </div>
      }
    </div>
  );
}
