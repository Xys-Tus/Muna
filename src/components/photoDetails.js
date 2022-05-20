import React from "react";
// Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// Styling
import { motion } from "framer-motion";
import styled from "styled-components";
// Icons
import { IconContext } from "react-icons";
import { BsChevronDown } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoMdCheckmarkCircle, IoMdShareAlt } from "react-icons/io";

const PhotoDetails = () => {
  const { details, isLoading } = useSelector((state) => state.photoDetails);
  // const { home } = useSelector((state) => state.pictures);
  const navigate = useNavigate();
  const homeNavigate = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  // Count iteration
  // let increase = 0;
  let increase = 0;
  const increaseCount = () => {
    increase++;
    console.log(increase);
  };
  return (
    <>
      {!isLoading && (
        <IconContext.Provider value={{ className: "detailIcon" }}>
          <Shadow className="shadow" onClick={homeNavigate}>
            <DetailsContainer>
              <TopInfo>
                <LeftInfo>
                  <ProfImg>
                    <img
                      src={details.user.profile_image.large}
                      alt="profileimg"
                    />
                  </ProfImg>
                  <NameFollowrs>
                    <h3>{details.user.name}</h3>
                    <p> followers</p>
                  </NameFollowrs>
                  <button onClick={increaseCount}>Follow</button>
                  <button>Donate</button>
                </LeftInfo>
                <RightInfo>
                  <RightButton>
                    <BsSuitHeart />
                    <p>169</p>
                    <p>likes</p>
                  </RightButton>
                  <RightButton>
                    <GrAddCircle />
                    <p>Collect</p>
                  </RightButton>
                  <DownloadButton>
                    <p>Free Download</p>
                    <BsChevronDown color="white" fontSize="2rem" />
                  </DownloadButton>
                </RightInfo>
              </TopInfo>
              <ImageDescription>
                <img src={details.urls.regular} alt="nothing much" />
                <PictureInfo>
                  <TopPicInfo>
                    <div>
                      <FaEye />
                      <p>{details.views} views</p>
                    </div>
                    <div>
                      <IoMdCheckmarkCircle />
                      <p>Free to use</p>
                    </div>
                  </TopPicInfo>
                  <BottomPicInfo>
                    <div>
                      <IoMdShareAlt />
                      <p>share</p>
                    </div>
                    <div>
                      <AiFillInfoCircle />
                      <p>Info</p>
                    </div>
                  </BottomPicInfo>
                </PictureInfo>
              </ImageDescription>
              <div className="render_similarPhoto"></div>
              <div className="Related_Tags"></div>
            </DetailsContainer>
          </Shadow>
        </IconContext.Provider>
      )}
    </>
  );
};

const Shadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgb(0, 0, 0, 0.8);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  overflow-y: scroll;
`;

const DetailsContainer = styled(motion.div)`
  width: 90%;
  border-radius: 5px;
  padding: 2rem 2rem;
  background: white;
  position: absolute;
  top: 4%;
  left: 5%;
  color: black;
  img {
    width: 100%;
  }
`;

const TopInfo = styled(motion.div)`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const LeftInfo = styled(motion.div)`
  display: flex;
  align-items: center;
  h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.3rem;
  }
  button {
    margin: 0rem 1rem;
    width: 7rem;
    height: 3.5rem;
    background: white;
    border: 1px solid #c5c1c1;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const RightInfo = styled(motion.div)`
  display: flex;
`;
const RightButton = styled(motion.div)`
  display: flex;
  margin: 0rem 1rem;
  border: 1px solid #c5c1c1;
  height: 4.5rem;
  width: 13rem;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0rem 2rem;
  p {
    font-size: 1.5rem;
  }
`;
const DownloadButton = styled(motion.div)`
  background: #05a081;
  height: 4.5rem;
  width: 18rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  cursor: pointer;
  p {
    color: white;
    font-size: 1.5rem;
  }
`;
const NameFollowrs = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 0rem 1rem;
`;

const ProfImg = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  box-sizing: 50%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 0.5rem;
  img {
    width: 5rem;
    height: 5rem;
  }
`;

const ImageDescription = styled(motion.div)`
  padding: 0rem 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 40rem;
    height: 80vh;
    object-fit: cover;
  }
`;

const PictureInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const TopPicInfo = styled(motion.div)`
  display: flex;
  margin: 2rem 0rem;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0rem 1rem;
    p {
      font-size: 1.2rem;
      margin: 0rem 1rem;
    }
  }
`;
const BottomPicInfo = styled(motion.div)`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #c5c1c1;
    height: 3rem;
    width: 8rem;
    margin: 0rem 1rem;
    /* padding: 0rem 0.5rem; */
    p {
      font-size: 1.2rem;
      margin: 0rem 1rem;
    }
  }
`;

export default PhotoDetails;
