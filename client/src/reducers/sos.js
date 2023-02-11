import { CREATE_SOS } from "../actions/types";
import society from "./society";

const initialState = {
  sos: null,
  loading: true,
  error: {},
};

export default function sos(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_SOS:
      return {
        ...state,
        sos: payload,
        loading: false,
      };
    default:
      return state;
  }
}
