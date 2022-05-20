// import { createClient } from "pexels";

// const client = createClient(
//   "563492ad6f917000010000010534d515f1c34f97b9c0e0f8bbfeac57"
// );

// // All requests made with the client will be authenticated

// export const photosURL = () =>
//   `https://api.pexels.com/v1/curated?per_page=15&page=1&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;

// export const searchedURL = (search) =>
//   `https://api.unsplash.com/search/photos?per_page=18&page=1&query=${search}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;

// export const randomUrl = () =>
//   `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;

// export const detailsURL = (photo_id) =>
//   `https://api.unsplash.com/photos/${photo_id}?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`; 

// export const morePhotosURL = (page) =>
//   `https://api.unsplash.com/photos?per_page=15&page=${page}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;

export const photosURL = () =>
  `https://api.unsplash.com/photos?per_page=15&page=1&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;

// `https://api.unsplash.com/photos?per_page=1&page=200&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;
// `https://api.unsplash.com/photos?per_page=30&page=200&client_id=T3Sw_oYU-Mq35igZ-SqdLUE8G4f7yIJj7iIQJWTOaeI`;
// `https://api.unsplash.com/photos?per_page=30&page=200&client_id=gPjBlDnZfJ1-6y1eCWCwJEqs_zQV0mbckkDzQvEvBo8`;
// `https://api.unsplash.com/photos/?client_id=gPjBlDnZfJ1-6y1eCWCwJEqs_zQV0mbckkDzQvEvBo8`;

// SEARCHED
// https://api.unsplash.com/search/photos?page=1&query=moon&client_id=gPjBlDnZfJ1-6y1eCWCwJEqs_zQV0mbckkDzQvEvBo8

// https://api.unsplash.com/photos?page=1&client_id=gPjBlDnZfJ1-6y1eCWCwJEqs_zQV0mbckkDzQvEvBo8

export const searchedURL = (search) =>
  `https://api.unsplash.com/search/photos?per_page=18&page=1&query=${search}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;

export const randomUrl = () =>
  `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;
// `https://api.unsplash.com/photos?per_page=30&page=200&client_id=gPjBlDnZfJ1-6y1eCWCwJEqs_zQV0mbckkDzQvEvBo8`;

// `https://api.unsplash.com/photos/random&client_id=gPjBlDnZfJ1-6y1eCWCwJEqs_zQV0mbckkDzQvEvBo8`;

export const detailsURL = (photo_id) =>
  `https://api.unsplash.com/photos/${photo_id}?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;
// `https://api.unsplash.com/photos/oaJiykT4mC8?client_id=gPjBlDnZfJ1-6y1eCWCwJEqs_zQV0mbckkDzQvEvBo8`;

export const morePhotosURL = (page) =>
  `https://api.unsplash.com/photos?per_page=15&page=${page}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;
