import { hot } from "react-hot-loader/root";
import React, { useState, useRef, useEffect } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import Nav from "./components/Nav";
import Summary from "./components/Home/Summary";
import Headline from "./components/Home/Headline";
import Definition from "./components/Home/Definition";
import BtcBackground from "./components/Home/BtcBackground";
import DollarChart from "./components/Home/DollarChart";
import ActualCost from "./components/Home/ActualCost";
import Introduction from "./components/Home/Introduction";
import JippiLogoAnimated from "./components/Home/JippiLogoAnimated";
import EarnLearnConnect from "./components/Home/EarnLearnConnect";
import Footer from "./components/Home/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";

import "./App.scss";

const App = () => {
  const [inView, setInView] = React.useState(false);
  const [shouldShowNav, setShouldShowNav] = React.useState(false);
  const parallax = useRef();

  const handleScroll = () => {
    if (parallax.current && parallax.current.current > 600) {
      setShouldShowNav(true)
    } else {
      setShouldShowNav(false)
    }
  };

  useEffect(() => {
    const container = document.querySelector(".scrolling");
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
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

  return (
    <>
      <Nav shouldShowNav={shouldShowNav} />
      <Parallax pages={15} ref={parallax} className="scrolling">
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
              subtitle="The easiest, most interactive way to earn and learn about Bitcoin."
            />
          </InView>
        </ParallaxLayer>
        <Summary />
        <DollarChart isMobile={isMobile} />
        <Definition />
        <BtcBackground />
        <ActualCost />
        <Introduction />
        <JippiLogoAnimated />
        <EarnLearnConnect
          offsetValue={11}
          headerText="Earn"
          text="Stacking sats couldn't be simpler. With Jippi, every time you
                  complete a Path or attend a Gathering, you're rewarded with
                  bitcoin. It's that easy."
          imageUrl="/earn.png"
        />
        <EarnLearnConnect
          offsetValue={12}
          headerText="Learn"
          text="Paths are the best way to learn about bitcoin in easily digestible, bite-size learning modules. They're interactive and built with beginners in mind."
          imageUrl="/learn.png"
        />
        <EarnLearnConnect
          offsetValue={13}
          headerText="Connect"
          text="Join a Tribe to connect with other bitcoiners and attend live audio conversations called Gatherings. Anyone can join a Gathering to listen and learn from others on their bitcoin journey."
          imageUrl="/connect.png"
        />
        <ParallaxLayer
          offset={isMobile ? 14.2 : 14.6}
        >
        <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default hot(App);
