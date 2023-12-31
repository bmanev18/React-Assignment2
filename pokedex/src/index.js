import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
