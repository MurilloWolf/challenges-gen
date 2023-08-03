import { Data } from "../types/data";
import { difficultyLevels, projects, punishments } from "../data";
import { DifficultyLevel } from "../types/difficultyLevels";

const getRandomObjects = (
  database: Data[],
  difficulty: keyof DifficultyLevel
) => {
  let filteredDatabase = database.filter((item) => {
    return item.difficulty === difficultyLevels[difficulty];
  });

  if (!Object.keys(difficultyLevels).includes(difficulty)) {
    filteredDatabase = database;
  }

  const randomIndex = Math.floor(Math.random() * filteredDatabase.length);
  return filteredDatabase[randomIndex];
};

const getRandomGenericObjects = (
  dataName: "projects" | "punishments",
  difficulty: keyof DifficultyLevel
) => {
  const databases = {
    projects,
    punishments,
  };

  return getRandomObjects(databases[dataName], difficulty);
};

export const getRandomChallenge = (
  difficulty: keyof DifficultyLevel,
  punishmentLevel?: keyof DifficultyLevel
) => {
  const randomProject = getRandomGenericObjects("projects", difficulty);

  if (punishmentLevel) {
    const randomPunishment = getRandomGenericObjects(
      "punishments",
      punishmentLevel
    );

    return { project: randomProject, punishment: randomPunishment };
  }
  return { project: randomProject, punishment: null };
};

export const getRandomPunishments = (difficulty: keyof DifficultyLevel) => {
  const randomPunishment = getRandomGenericObjects("punishments", difficulty);
  return randomPunishment;
};
