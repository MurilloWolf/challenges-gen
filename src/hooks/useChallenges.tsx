import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

export default function useChallenges() {
  const { doneProjects } = useContext(ChallengesContext);

  return {
    doneProjects,
  };
}
