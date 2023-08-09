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
    <div className="settings-wrapper">
      <div
        className={`options-container settings--${
          showOptions ? "show" : "hide"
        }`}
      >
        <fieldset>
          <legend>Projects</legend>
          <div className="otptions-levels">
            {generateCheckBox("projectLevels")}
          </div>
        </fieldset>
        <fieldset>
          <legend>Punishments</legend>
          <div className="otptions-levels">
            {generateCheckBox("punishmentLevels")}
          </div>
        </fieldset>
      </div>
      <div className="btn-position">
        <button
          type="button"
          className="circle-button"
          onClick={() => setShowOptions(!showOptions)}
        >
          <Gear size={24} />
        </button>
      </div>
    </div>
  );
}
