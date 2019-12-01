const CHECK_RIGHT = "CHECK_RIGHT" as const;

export const checkRight = (payload: { isOwner: boolean }) => ({
  type: CHECK_RIGHT,
  right: payload.isOwner
});

const initialState: { right: boolean } = {
  right: false
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHECK_RIGHT:
      return {
        ...state,
        action
      };
    default:
      return state;
  }
};
