import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Home from "./views/home.view";
import Projects from "./views/projects.view";
import Contact from "./views/contact.view";
import AboutMe from "./views/aboutMe.view";
import Error404 from "./views/Error404.view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />
  },
  {
    path: "/:lang/aboutMe/",
    element: <AboutMe />,
    errorElement: <Error404 />
  },
  {
    path: "/:lang/projects/",
    element: <Projects />,
    errorElement: <Error404 />
  },
  {
    path: "/:lang/contact",
    element: <Contact />,
    errorElement: <Error404 />
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);