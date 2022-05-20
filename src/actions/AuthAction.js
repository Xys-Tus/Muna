import axios from "axios";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

export const UserAuth = () => (dispatch) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then((result) => {
    dispatch({
      type: "NEW_USER",
      payload: {
        user: result.user,
      },
    });
  });
};

export const getUserAuth = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch({
        type: "NEW_USER",
        payload: {
          user: user,
        },
      });
    }
  });
};

export const LogOut = () => (dispatch) => {
  signOut(auth).then(() => {
    dispatch({
      type: "NEW_USER",
      payload: {
        user: null,
      },
    });
  });
};
