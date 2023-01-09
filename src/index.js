import React, { Children, createContext, useContext, useReducer } from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Root from "./views/home.view";
import Projects from "./views/projects.view";
import Contact from "./views/contact.view";
import AboutMe from "./views/aboutMe.view";
import Error404 from "./views/Error404.view";

import './sass/_body.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/:lang/projects/",
        element: <Projects />
      },
      {
        path: "/:lang/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  },
])

const initialState = {
  isDarkmodeOn: false
};

const actions = {
  TOGGLE_DARKMODE: "TOGGLE_DARKMODE",
};

const darkmodeReducer = (state, action) => {
  switch (action.type){
    case actions.TOGGLE_DARKMODE:
      return !state
    default: 
      return state;
  }
}

export const ConfigContext = createContext();

const reducers = ({isDarkmodeOn}, action) => {
  return {
    isDarkmodeOn: darkmodeReducer(isDarkmodeOn, action),
  }
}

const ConfigProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState)

  const value = {
    isDarkmodeOn: state.isDarkmodeOn,
    toggleDarkmode: () => {
      console.log(state.isDarkmodeOn)
      dispatch({type: actions.TOGGLE_DARKMODE})
    }
  }

  return (
    <ConfigContext.Provider value={value}>
      {children}
    </ConfigContext.Provider>
  );
} 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);