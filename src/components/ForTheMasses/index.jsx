import React, { useState, useRef, useEffect } from "react";
import Nav from "../Nav";
import Headline from "./Headline";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import WhyWeDoIt from "./WhyWeDoIt";
import Footer from "../Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import Partnerships from "./Partnerships";
import WhatsNext from "./WhatsNext";

const ForTheMasses = () => {
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
    <Parallax pages={7} ref={parallax} className="scrolling">
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
      <WhoWeAre />
      <WhatWeDo />
      <WhyWeDoIt />
      <Partnerships />
      <WhatsNext />
      <Footer offsetValue={6} />
    </Parallax>
  </>
  );
};

export default ForTheMasses;
