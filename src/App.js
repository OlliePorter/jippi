import { hot } from "react-hot-loader/root";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Home from "./components/Home";
import ErrorPage from "./components/Error";
import EULA from "./components/EndUserLicenseAgreement";
import PitchDeck from "./components/PitchDeck";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/terms-of-service",
      element: <TermsOfService />
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />
    },
    {
      path: "/end-user-license-agreement",
      element: <EULA />
    },
    {
      path: "/pitch-deck",
      element: <PitchDeck />,
    },
  ]);

  return <React.StrictMode><RouterProvider router={router} /></React.StrictMode> 
};

export default hot(App);
