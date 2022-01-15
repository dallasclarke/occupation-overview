export const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const occupationDataReducer = (state, action) => {
  switch (action.type) {
    case "CALL_API":
      return {
        ...state,
        loading: true,
      };

    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.data,
      };

    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
