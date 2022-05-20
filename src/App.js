import React, { useEffect } from "react";
import Home from "./pages/home";
import GlobalStyles from "./components/GlobalSytle";
import { PhotoDetails } from "./components/photoDetails";
// Router
import { Route, Routes } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { useDispatch } from "react-redux";
import Protected from "./components/Protected";

import { getUserAuth } from "./actions/AuthAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const Auth = async () => {
      dispatch(getUserAuth());
    };
    Auth();
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route
          exact
          path={"/"}
          element={
            <Protected>
              <Home />
            </Protected>
          }
        ></Route>
        <Route
          exact
          path={"/photo/:id"}
          element={
            <Protected>
              <Home />
            </Protected>
          }
        ></Route>
        <Route exact path={"/signin"} element={<Signin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
