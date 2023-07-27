import { hot } from "react-hot-loader/root";
import React, { useState, useRef } from "react";
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
import Footer from "./components/Home/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";

import "./App.scss";

const App = () => {
  const [inView, setInView] = React.useState(false);

  return (
    <>
      {/* <Nav isHidden={false} setIsHidden={() => {}} /> */}
      <Parallax
        pages={11}
      >
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
        <DollarChart />
        <Definition />
        <BtcBackground />
        <ActualCost />
        <Introduction />
        <JippiLogoAnimated />
        {/* <ParallaxLayer
          offset={9}
          style={{
            height: 80,
            position: "relative"
          }}
        >
        <Footer />
        </ParallaxLayer> */}
      </Parallax>
    </>
  );
};

export default hot(App);
