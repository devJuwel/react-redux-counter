import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant";

// const getLocalCountData = () => +localStorage.getItem("count");

const getLocalCountData = () => {
  const count = localStorage.getItem("count");
  if (count === null) {
    return 0;
  } else {
    return +count;
  }
};

const initialState = {
  count: getLocalCountData(),
};

export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        ...payload,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        ...payload,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        ...payload,
        count: 0,
      };

    default:
      return state;
  }
};
export default counterReducer;
