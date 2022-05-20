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
import { LogOut } from "../actions/AuthAction";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const { user } = useSelector((state) => state.newUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputTxt, setInputTxt] = useState("");
  const InputHandler = (e) => {
    setInputTxt(e.target.value);
  };

  const handleLogOut = async () => {
    navigate("/signin");
    dispatch(LogOut());
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(searchedPhotos(inputTxt));
    setInputTxt("");
  };
  return (
    <IconContext.Provider value={{ className: "navIcon" }}>
      <StyledNav>
        <img src="" alt="" />
        <h3>MUNA</h3>
        <SearchNav>
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

        <p>Explore</p>
        <p>Licence</p>
        <BiBell color="white" fontSize="2.5rem" />
        <ProfileNav>
          {user ? <img src={user.photoURL} alt="" /> : <ProfitIcon />}

          <DownIcon />
        </ProfileNav>
        <button onClick={handleLogOut}>Sign out</button>
      </StyledNav>
    </IconContext.Provider>
  );
};

const StyledNav = styled(motion.div)`
  position: fixed;
  z-index: 5;
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 3rem;
  color: white;
  font-family: "Dongle", sans-serif;

  button {
    min-width: 10rem;
    height: 4rem;
    background: #05a081;
    color: white;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  p {
    cursor: pointer;
    font-size: 2rem;
  }
  h3 {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 100vw;
    font-size: 1.5rem;
    background: #232a34;
    min-height: 8vh;
    p {
      position: absolute;
      transform: translateY(-1000%);
    }
    button {
      position: absolute;
      transform: translateY(-1000%);
    }
  }
`;

const SearchNav = styled(motion.div)`
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
  input {
    width: 90%;
    height: 4rem;
    border: none;
    border-radius: 4px;
    outline: none;
    padding: 0rem 2rem;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    width: 60vw;
    font-size: 1.5rem;
  }
`;
const ProfileNav = styled(motion.div)`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

const ProfitIcon = styled(CgProfile)`
  font-size: 2.5rem;
  color: white;
  @media (max-width: 768px) {
    position: absolute;
    transform: translateY(-1000%);
  }
`;
const DownIcon = styled(BsChevronDown)`
  font-size: 2.5rem;
  color: white;
  @media (max-width: 768px) {
    position: absolute;
    transform: translateY(-1000%);
  }
`;

export default Nav;
