import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

// Persist storage
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// this composeEnhancer is used to combine mutiple parameters
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; ........this is called devtool allows us to watch redux in our browser

// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
//The createstore only allows two parameters, the reducer and the devtools
// Which is why we have to import the compose and applymiddleware from redux
// We can add multiple middleware in the applyMiddleware(thunk, logger)
// All these just basically combines our devtool and thunk

// let stores = createStore(persistedReducer);
// export let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
  // </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
