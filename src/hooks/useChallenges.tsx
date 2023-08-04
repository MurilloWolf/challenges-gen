import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

export default function useChallenges() {
  return useContext(ChallengesContext);
}
