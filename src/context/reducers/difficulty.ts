type State = {
  [key: string]: string[];
};

type Action = {
  type: string;
  payload: {
    origin: string;
    value: string;
    checked: boolean;
  };
};

export const ActionTypes = {
  CHANGE_DIFFICULTY: "CHANGE_DIFFICULTY",
};

export const initialState = {
  projectLevels: [],
  punishmentLevels: [],
};

export const reducer = (state: State, action: Action): State => {
  const { origin, value } = action.payload;

  switch (action.type) {
    case ActionTypes.CHANGE_DIFFICULTY:
      //eslint-disable-next-line
      const stateToChange = state[origin];
      return {
        ...state,
        [origin]: action.payload.checked
          ? [...stateToChange, value]
          : stateToChange.filter((level: string) => level !== value),
      };
    default:
      return state;
  }
};
