import React from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Icons
import { IconContext } from "react-icons";
import { HiDownload } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
// linking to the photos details
import { Link } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { loadDetials } from "../actions/photoDetailsAction";

const Photo = ({ name, id, image, profileImg }) => {
  // Dispatching the photo details
  const dispatch = useDispatch();
  const details = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetials(id));
  };
  return (
    <IconContext.Provider value={{ className: "iconStyle" }}>
      <StyledPhoto onClick={details}>
        <Link to={`photo/${id}`}>
          <Shadow>
            <ProfDetails>
              <LeftProf>
                <ProfImg>
                  <img src={profileImg} alt="profileimg" />
                </ProfImg>
                <p>{name}</p>
              </LeftProf>
              <RightProf>
                <HiDownload />
                <IoIosAddCircleOutline />
                <BsSuitHeart />
              </RightProf>
            </ProfDetails>
          </Shadow>
          <img src={image} alt="random_img" />
        </Link>
      </StyledPhoto>
    </IconContext.Provider>
  );
};

const StyledPhoto = styled(motion.div)`
  position: relative;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    :hover {
      background: black;
      box-shadow: inset 5em 1em gold;
    }
  }
  @media (max-width: 768px) {
    img {
      height: 30vh;
    }
  }
`;
const ProfDetails = styled(motion.div)`
  width: 100%;
  /* height: 100%; */
  /* background: rgb(0, 0, 0, 0.05); */
  background-image: linear-gradient(
    to top,
    gray,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0)
  );
  bottom: 0rem;
  left: 0rem;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
  padding: 2rem;
  :hover {
    opacity: 1;
  }
`;
const LeftProf = styled(motion.div)`
  display: flex;
  align-items: center;
  p {
    color: white;
    font-size: 1.5rem;
  }
`;
const RightProf = styled(motion.div)`
  display: flex;
`;
const ProfImg = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  box-sizing: 50%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 0.5rem;
  img {
    width: 3rem;
    height: 3rem;
  }
`;

const Shadow = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0);
  bottom: 0rem;
  left: 0rem;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  padding: 2rem;
  :hover {
    opacity: 1;
  }
`;

export default Photo;
