import axios from "axios";
import { HOST } from "../App";
import { setAlert } from "./alert";
import { CREATE_SOS } from "./types";

// Create sos
export const createSos = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${HOST}/api/sos/${id}`);
    dispatch({
      type: CREATE_SOS,
      payload: res.data,
    });
    dispatch(setAlert("SOS Created", "success"));
  } catch (error) {
    dispatch(setAlert("SOS Failed", "danger"));
  }
};
