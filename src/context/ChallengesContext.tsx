import { createContext } from "react";
import useDoneProjects from "../hooks/useDoneProjects";

const ContextInitialState = {
  doneProjects: [] as number[],
};

type Props = {
  children: React.ReactNode;
};

export const ChallengesContext = createContext(ContextInitialState);

export default function ChallengesProvider({ children }: Props) {
  const { doneProjects } = useDoneProjects();

  const contextValue = {
    doneProjects,
  };
  return (
    <ChallengesContext.Provider value={contextValue}>
      {children}
    </ChallengesContext.Provider>
  );
}
