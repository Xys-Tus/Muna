import axios from "axios";
import { photosURL, searchedURL, randomUrl, morePhotosURL } from "../api";

// ACTION CREATOR
export const loadPhotos = () => async (dispatch) => {
  // FETCH AXIOS
  const photoData = await axios.get(photosURL());
  const randomData = await axios.get(randomUrl());
  //By dispatch, we are basically sending the data/action that we fetched from the api to our reducer or state
  dispatch({
    type: "FETCH_PHOTOS",
    payload: {
      pictures: photoData.data,
      random: randomData.data.urls,
    },
  });
};

export const searchedPhotos = (search) => async (dispatch) => {
  const searchedData = await axios.get(searchedURL(search));
  dispatch({
    type: "SEARCHED_PHOTOS",
    payload: {
      searched: searchedData.data.results,
    },
  });
};

export const loadMorePhotos = (page) => async (dispatch) => {
  const morePhotosData = await axios.get(morePhotosURL(page));
  dispatch({
    type: "LOAD_MORE_PHOTOS",
    payload: {
      morePhotos: morePhotosData.data,
    },
  });
};

// export const randomPhotos = () => async (dispatch) => {
//   const randomData = await axios.get(randomUrl());
//   dispatch({
//     type: "RANDOM_PHOTO",
//     payload: {
//       randomPic: randomData.data,
//     },
//   });
// };
