import axios from "axios";
import { HOST } from "../App";

import { GET_SOCIETIES, SOCIETY_ERROR } from "./types";

// Get all societies
export const getSocieties = () => async (dispatch) => {
  try {
    const res = await axios.get(`${HOST}/api/societies`);
    dispatch({
      type: GET_SOCIETIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SOCIETY_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
