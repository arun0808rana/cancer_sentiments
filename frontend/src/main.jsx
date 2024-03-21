import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
