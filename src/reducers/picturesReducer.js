const initState = {
  home: [],
  searched: [],
  random: [],
  morePhotos: [],
};

const pictureReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PHOTOS":
      return {
        ...state,
        home: action.payload.pictures,
        random: action.payload.random,
        // morePhotos: action.payload.morePhotos,
      };
    case "SEARCHED_PHOTOS":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "LOAD_MORE_PHOTOS":
      return {
        ...state,
        // home: action.payload.morePhotos,
        morePhotos: action.payload.morePhotos,
      };
    // case "RANDOM_PHOTO":
    //   return {
    //     ...state,
    //     randomPic: action.payload.randomPic,
    //   };
    default:
      return { ...state };
  }
};

export default pictureReducer;
