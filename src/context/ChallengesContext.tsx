import { createContext, useReducer } from "react";
import useDoneProjects from "../hooks/useDoneProjects";
import { reducer, initialState, ActionTypes } from "./reducers/difficulty";

const ContextInitialState = {
  doneProjects: [] as number[],
  changeDifficultyFrom: (
    event: React.ChangeEvent<HTMLInputElement>,
    origin: string
  ) => {
    console.log(event, origin);
  },
  projectLevels: [] as string[],
  punishmentLevels: [] as string[],
};

type Props = {
  children: React.ReactNode;
};

export const ChallengesContext = createContext(ContextInitialState);

export default function ChallengesProvider({ children }: Props) {
  const { doneProjects } = useDoneProjects();
  const [levelsConfig, dispatchLevelsConfig] = useReducer(
    reducer,
    initialState
  );

  const changeLevelsSettings = (
    event: React.ChangeEvent<HTMLInputElement>,
    origin: string
  ) => {
    const {
      target: { checked, value },
    } = event;

    // verify if origin string matches with the name o the state
    if (origin !== "projectLevels" && origin !== "punishmentLevels") return;

    dispatchLevelsConfig({
      type: ActionTypes.CHANGE_DIFFICULTY as string,
      payload: { checked, value, origin },
    });
  };

  const contextValue = {
    doneProjects,
    changeDifficultyFrom: changeLevelsSettings,
    projectLevels: levelsConfig.projectLevels,
    punishmentLevels: levelsConfig.punishmentLevels,
  };

  return (
    <ChallengesContext.Provider value={contextValue}>
      {children}
    </ChallengesContext.Provider>
  );
}
