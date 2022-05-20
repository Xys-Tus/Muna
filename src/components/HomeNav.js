import React, { useState, useEffect } from "react";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";
// Icons
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { searchedPhotos } from "../actions/photosAction";
const HomeNav = ({ image }) => {
  const dispatch = useDispatch();
  const [inputTxt, setInputTxt] = useState("");
  const InputHandler = (e) => {
    setInputTxt(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(searchedPhotos(inputTxt));
    setInputTxt("");
  };
  return (
    <IconContext.Provider value={{ className: "navIcon" }}>
      <StyledNav>
        <img src={image} alt="moonwalk" />
        <ShadowDiv></ShadowDiv>
        <SearchNav>
          <h2>
            The best free stock photos, royalty <br /> free images & videos
            shared by <br /> creators
          </h2>
          <form>
            <input
              type="text"
              value={inputTxt}
              placeholder="Search for free photos"
              onChange={InputHandler}
            />
            <button type="submit" onClick={submitSearch}>
              <AiOutlineSearch onClick={submitSearch} />
            </button>
          </form>
        </SearchNav>
      </StyledNav>
    </IconContext.Provider>
  );
};

const StyledNav = styled(motion.div)`
  /* background: #232a34; */
  background: white;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 3rem;
  color: white;
  min-height: 60vh;
  position: relative;
  margin-bottom: 4rem;
  /* padding: 4rem 0rem; */
  font-family: "Dongle", sans-serif;
  input {
    width: 70rem;
    height: 4rem;
    border: none;
    border-radius: 4px;
    outline: none;
    padding: 0rem 2rem;
    font-size: 1.8rem;
  }
  button {
    width: 10rem;
    height: 4rem;
    background: #05a081;
    color: white;
    font-family: "Dongle", sans-serif;
    /* font-size: 3rem; */
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  p {
    cursor: pointer;
  }
  h3 {
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    /* position: absolute; */
  }
  h2 {
    font-family: sans-serif;
    color: white;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const ShadowDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background: rgb(0, 0, 0, 0.2);
`;

const SearchNav = styled(motion.div)`
  position: absolute;
  width: 50vw;
  form {
    display: flex;
    width: 100%;
    height: 5rem;
    background: white;
    border-radius: 4px;
    align-items: center;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 3rem;
      background: white;
      width: auto;
    }
  }
`;

export default HomeNav;
