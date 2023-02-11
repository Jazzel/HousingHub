import { GET_SOCIETIES, SOCIETY_ERROR } from "../actions/types";

const initialState = {
  societies: [],
  loading: true,
  error: {},
};

export default function society(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SOCIETIES:
      return {
        ...state,
        societies: payload,
        loading: false,
      };
    case SOCIETY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
