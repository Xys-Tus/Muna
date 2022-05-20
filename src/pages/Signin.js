import React, { useEffect } from "react";
import { UserAuth } from "../actions/AuthAction";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const { user } = useSelector((state) => state.newUser);

  const dispatch = useDispatch();
  const navitage = useNavigate();

  const handleGoogleSignin = async () => {
    dispatch(UserAuth());
  };

  useEffect(() => {
    if (user != null) {
      navitage("/");
    }
  }, [user]);

  return (
    <SigninDIv>
      <h1>Welcome</h1>
      {user ? (
        // <button onClick={handleLogOut}>Log out</button>
        <button>Log out</button>
      ) : (
        <button onClick={handleGoogleSignin}> Click to sign in</button>
      )}
    </SigninDIv>
  );
};

const SigninDIv = styled.div`
  margin-top: 20rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    width: 20rem;
    height: 4rem;
    color: black;
    background-color: white;
    border: 1px solid black;
    margin-top: 2rem;
    cursor: pointer;
  }
`;
