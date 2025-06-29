import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import { Component } from "react";
import Home from "../components/Home/Home";
import LetsDiscuss from "../components/Home/LetsDiscuss/LetsDiscuss";
import Hero from "../Pages/Hero/Hero";
import AboutMe from "../components/Home/AboutMe";
import Skills from "../components/Home/Skills/Skills";
import Projects from "../components/Home/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: '/letsDiscuss',
        Component: LetsDiscuss
      },
      {
        path: '/hero',
        Component: Hero
      },
      {
        path: '/aboutMe',
        Component: AboutMe
      },
      {
        path: '/skills',
        Component: Skills
      },
      {
        path: '/projects',
        Component: Projects
      },
    ]
  },
]);