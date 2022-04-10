import React from "react";
import { useRoutes } from "react-router";

import Main from "./components/Main";
import MyLayout from "./components/MyLayout";

import "./assets/css/App.css";
import EvalScheduleMain from './components/EvalScheduleMain';

export default function App() {
  return useRoutes([
    { path: "layout", element: <MyLayout /> },
    { path: "*", element: <Main /> },
    { path: "/evaluation_search", element: <EvalScheduleMain />},
  ]);
}
