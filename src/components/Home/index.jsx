import React, { useState, useRef, useEffect } from "react";
import Nav from "../Nav";
import Summary from "./Summary";
import Headline from "./Headline";
import Definition from "./Definition";
import BtcBackground from "./BtcBackground";
import DollarChart from "./DollarChart";
import ActualCost from "./ActualCost";
import Introduction from "./Introduction";
import EarnLearnConnect from "./EarnLearnConnect";
import Footer from "../Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import CallToAction from "./CallToAction";
import JippiLogo from "../JippiLogo";

const Home = () => {
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

  return (   
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
        text="Earning bitcoin couldn't be simpler. With Jippi, every time you complete a Path you're rewarded in bitcoin via the Lightning network. It's that easy."
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
        text="Join a Tribe to connect with other bitcoiners and attend live audio conversations called Gatherings. Anyone can join a Gathering to learn from Bitcoin thought leaders."
        imageUrl="/connect.png"
      />
      <CallToAction
        title="Join Jippi"
        subtitle="Bitcoin education for the masses."
        offsetValue={16}
      />
      <Footer offsetValue={17} />
    </Parallax>
  </>
  );
};

export default Home;
