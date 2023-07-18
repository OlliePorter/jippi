import { hot } from "react-hot-loader/root";
import React, { useState, useRef } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Headline from "./components/Home/Headline"
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useInView, InView } from "react-intersection-observer";

import "./App.scss";

const App = () => {
  // const [isHidden, setIsHidden] = useState(false);
  // const ref = useRef();

  // const hiddenElements = document.querySelectorAll(".hidden");
  // hiddenElements.forEach((el)=> observer.observe(el)) ;

  // const observer = new IntersectionObserver ((entries) => {
  //   return entries.forEach((entry) => { console.log (entry)
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("show");
  //     } else {
  //       entry.target.classList.remove("show");
  //     }
  //     // return entry.target.classList.toggle('show', entry.isIntersecting);
  //   });
  // });
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // });

  // background: "linear-gradient(90deg, rgba(41, 143, 126, 0.85) 0%, rgba(62, 105, 168, 0.85) 32%, rgba(225, 73, 125, 0.85) 63%, rgba(248, 158, 70, 0.85) 100%);"
  const [inView, setInView] = React.useState(false);
  const [inView2, setInView2] = React.useState(false);
  const [inView3, setInView3] = React.useState(false);

  return (
    <>
      <Parallax
        pages={3}
        // ref={ref}
        style={
          {
            // backgroundImage:
            //   "linear-gradient(90deg, rgba(41, 143, 126, 0.85) 0%, rgba(62, 105, 168, 0.85) 32%, rgba(225, 73, 125, 0.85) 63%, rgba(248, 158, 70, 0.85) 100%)",
          }
        }
      >
        <ParallaxLayer
          offset={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage:
              "linear-gradient(90deg, rgba(41, 143, 126, 0.85) 0%, rgba(62, 105, 168, 0.85) 32%, rgba(225, 73, 125, 0.85) 63%, rgba(248, 158, 70, 0.85) 100%)",
          }}
        >
          <InView onChange={setInView}>
            {/* <p className={inView === true ? "show" : "hidden"}>
              Element is inside the viewport: {inView.toString()}
            </p> */}
            <Headline
              inView={inView2}
              // setIsHidden={setIsHidden}
              imageSrc="/btc_convo.png"
              subtitle="The easiest, most enjoyable way to buy Bitcoin."
            />
          </InView>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage:
              "linear-gradient(90deg, rgba(41, 143, 126, 0.85) 0%, rgba(62, 105, 168, 0.85) 32%, rgba(225, 73, 125, 0.85) 63%, rgba(248, 158, 70, 0.85) 100%)",
          }}
        >
          <InView onChange={setInView2}>
            <p className={inView2 === true ? "show" : "hidden"}>
              Element is inside the viewport: {inView2.toString()}
            </p>
          </InView>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fffff",
          }}
        >
          <InView onChange={setInView3}>
            <p className={inView3 === true ? "show" : "hidden"}>
              Element is inside the viewport: {inView3.toString()}
            </p>
          </InView>
        </ParallaxLayer>
      </Parallax>
      {/* <Nav isHidden={isHidden} setIsHidden={setIsHidden} /> */}
      {/* <HashRouter>
        <Switch>
          <Route exact path='/'>
            <Home setIsHidden={setIsHidden} />
          </Route> 
          <Route exact path='/sign_up'>
            <SignUp  />
          </Route> 
        </Switch>
      </HashRouter> */}
    </>
  );
};

export default hot(App);
