import React, { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos, loadMorePhotos } from "../actions/photosAction";
// Components
import Photo from "../components/photo";
import HomeNav from "../components/HomeNav";
import PhotoDetails from "../components/photoDetails";
import Nav from "../components/Nav";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Getting the location of our current page
import { useLocation } from "react-router-dom";
// Show Nav
import { showNavbar } from "../components/Animation";
import { useScroll } from "../components/UseScroll";

const Home = () => {
  // Animation section

  // To get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  //Extracting the data from the state. dispatch
  const { home, searched, random, morePhotos } = useSelector(
    (state) => state.pictures
  );
  const { details } = useSelector((state) => state.photoDetails);
  // this takes in the name that's in our state eg, home and searched

  const [number, setNumber] = useState(100);
  const [element,controls] = useScroll(false);

  useEffect(() => {
    dispatch(loadMorePhotos(20));
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadPhotos());
  }, [dispatch]);

  const loadMore = () => {
    setNumber(number + 10);
    dispatch(loadMorePhotos(number));
    home.push(...morePhotos);
  };

  return (
    <div>
      <Nav />
      <HomeNav image={random.regular} />
      <PhotoList>
        {pathId && details.length !== 0 ? <PhotoDetails pathId={pathId} /> : ""}
        {searched.length !== 0 ? (
          <Pictures>
            {searched.map((photo) => (
              <Photo
                name={photo.user.name}
                id={photo.id}
                image={photo.urls.regular}
                key={photo.id}
                profileImg={photo.user.profile_image.large}
              />
            ))}
          </Pictures>
        ) : (
          <Pictures>
            {home.map((photo) => (
              <Photo
                name={photo.user.name}
                id={photo.id}
                image={photo.urls.regular}
                key={photo.id}
                profileImg={photo.user.profile_image.large}
              />
            ))}
          </Pictures>
        )}
      </PhotoList>
      <button  onClick={loadMore}>Load More</button>
    </div>
  );
};

const PhotoList = styled(motion.div)`
  margin: 0rem 1.5rem;
`;
const Pictures = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: auto;
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 1.2rem;
  /* grid-auto-flow: dense; */
  cursor: pointer;
  /* width: 100%; */
  /* height: 50px; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-auto-rows: ; */
  /* img {
    width: 30rem;
  } */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    /* height: 50px; */
  }
`;

export default Home;
