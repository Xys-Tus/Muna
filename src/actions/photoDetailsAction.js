import axios from "axios";
import { detailsURL } from "../api";

export const loadDetials = (photo_id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAILS",
  });
  const photoDetails = await axios.get(detailsURL(photo_id));
  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      details: photoDetails.data,
    },
  });
};
