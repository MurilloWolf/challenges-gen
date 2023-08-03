export const ActionTypes = {
  SET_PUNISHMENT_DIFFICULTY: "SET_PUNISHMENT_DIFFICULTY",
  SET_PROJECT_DIFFICULTY: "SET_PROJECT_DIFFICULTY",
};

interface State {
  punishmentLevel: string;
  projectLevel: string;
}

interface Action {
  type: keyof typeof ActionTypes;
  payload: string;
}

export default function reducer(state: State, action: Action) {
  const { type, payload } = action;
  const actions = {
    SET_PUNISHMENT_DIFFICULTY: () => ({
      ...state,
      punishmentLevel: payload,
    }),
    SET_PROJECT_DIFFICULTY: () => ({
      ...state,
      projectLevel: payload,
    }),
  };

  return actions[type] ? actions[type]() : state;
}
