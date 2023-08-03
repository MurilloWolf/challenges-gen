import difficultyLevels from "./difficultyLevels";
export default [
  {
    id: 1,
    title: "Without Copilot",
    description: "You are not allowed to use Copilot for this project.",
    difficulty: difficultyLevels.easy,
  },
  {
    id: 2,
    title: "Without Copy and Paste",
    description: "You are not allowed to copy and paste code for this project.",
    difficulty: difficultyLevels.easy,
  },
  {
    id: 3,
    title: "Without Internet",
    description:
      "You are not allowed to use the internet for this project. But you can download the libraries you need before starting the project.",
    difficulty: difficultyLevels.hard,
  },
  {
    id: 4,
    title: "Without StackOverflow",
    description: "You are not allowed to use StackOverflow for this project.",
    difficulty: difficultyLevels.medium,
  },
  {
    id: 5,
    title: "Without Google",
    description:
      "You are not allowed to use Google or other search engines for this project (ChatGPT is allowed).",
    difficulty: difficultyLevels.medium,
  },
  {
    id: 6,
    title: "Without Documentation",
    description: "You cant research or read documentation for this project.",
    difficulty: difficultyLevels.medium,
  },
  {
    id: 7,
    title: "Without Libraries",
    description: "You are not allowed to use any libraries for this project.",
    difficulty: difficultyLevels.hard,
  },
  {
    id: 8,
    title: "Without Code",
    description:
      "You are not allowed to write any code for this project. You only can copy and paste code from other projects/libraries/chatGPT/...",
    difficulty: difficultyLevels.hard,
  },
  {
    id: 9,
    title: "You cant use 'console'",
    description:
      "You cant use 'console[.log, .warn, . info]' for this project.",
    difficulty: difficultyLevels.easy,
  },
  {
    id: 10,
    title: "You cant use 'if'",
    description:
      "You cant use 'if' for this project, but you can use 'switch' or ternary operator.",
    difficulty: difficultyLevels.medium,
  },
  {
    id: 11,
    title: "You cant use 'return'",
    description:
      "Really? i dont know how you will do this, or if this is possible, but you need to try.",
    difficulty: difficultyLevels.hard,
  },
  {
    id: 12,
    title: "You can run the code only tree times",
    description:
      "You can run the code only tree times, if you need to run more times, you need to restart the project.",
    difficulty: difficultyLevels.medium,
  },
  {
    id: 13,
    title: "You can run the code only one time",
    description:
      "You can run the code only one time, if you need to run more times, you need to restart the project.",
    difficulty: difficultyLevels.hard,
  },
];
