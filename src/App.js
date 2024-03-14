import { hot } from "react-hot-loader/root";
import React, { useState, useRef, useEffect } from "react";
import Nav from "./components/Nav";
import Summary from "./components/Home/Summary";
import Headline from "./components/Home/Headline";
import Definition from "./components/Home/Definition";
import BtcBackground from "./components/Home/BtcBackground";
import DollarChart from "./components/Home/DollarChart";
import ActualCost from "./components/Home/ActualCost";
import Introduction from "./components/Home/Introduction";
import EarnLearnConnect from "./components/Home/EarnLearnConnect";
import Footer from "./components/Home/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import CallToAction from "./components/Home/CallToAction";
import JippiLogo from "./components/Home/JippiLogo";
import TermsAndConditions from "./components/TermsAndConditions";

const App = () => {
  const [inView, setInView] = React.useState(false);
  const [shouldShowNav, setShouldShowNav] = React.useState(false);
  const parallax = useRef();

  const handlePageScroll = () => {
    if (parallax.current && parallax.current.current > 600) {
      setShouldShowNav(true);
    } else {
      setShouldShowNav(false);
    }
  };

  useEffect(() => {
    const container = document.querySelector(".scrolling");
    container.addEventListener("scroll", handlePageScroll);
    return () => {
      container.removeEventListener("scroll", handlePageScroll);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element:
      <>
        <Parallax pages={18} ref={parallax} className="scrolling">
          <ParallaxLayer
            style={{ height: "200px" }}
            sticky={{ start: 0, end: 17 }}
          >
            <Nav
              shouldShowNav={shouldShowNav}
              innerRef={parallax}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage:
                "linear-gradient(90deg, rgba(19, 182, 184, 1) 0%, rgba(73, 208, 190, 1) 100%)",
            }}
          >
            <InView onChange={setInView}>
              <Headline
                inView={inView}
                imageSrc="/floating_person.png"
              />
            </InView>
          </ParallaxLayer>
          <Summary />
          <DollarChart isMobile={isMobile} />
          <Definition />
          <BtcBackground />
          <ActualCost />
          <Introduction />
          <JippiLogo />
          <EarnLearnConnect
            offsetValue={13}
            headerText="Earn"
            text="Stacking sats couldn't be simpler. With Jippi, every time you
                    complete a Path or attend a Gathering, you're rewarded with
                    Bitcoin. It's that easy."
            imageUrl="/earn.png"
          />
          <EarnLearnConnect
            offsetValue={14}
            headerText="Learn"
            text="Paths are the best way to learn about Bitcoin in easily digestible, bite-size learning modules. They're interactive and built with beginners in mind."
            imageUrl="/learn.png"
          />
          <EarnLearnConnect
            offsetValue={15}
            headerText="Connect"
            text="Join a Tribe to connect with other Bitcoiners and attend live audio conversations called Gatherings. Anyone can join a Gathering to listen and learn from others on their Bitcoin journey."
            imageUrl="/connect.png"
          />
          <CallToAction
            title="Join Jippi"
            subtitle="Bitcoin education for the masses."
            offsetValue={16}
          />
          <Footer offsetValue={17} />
        </Parallax>
      </>,
    },
    {
      path: "/terms",
      element: <TermsAndConditions />
    }
  ]);

  return  <React.StrictMode><RouterProvider router={router} /></React.StrictMode> 
};

export default hot(App);
