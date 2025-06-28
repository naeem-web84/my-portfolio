import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import { Component } from "react";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
      Component: Home
    }
    ]
  },
]);