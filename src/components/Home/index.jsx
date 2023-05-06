import React from "react";
import Headline from "./Headline";
import Summary from "./Summary";
import Features from "./Features";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

const Home = ({ setIsHidden }) => {

  return <>
    <Headline setIsHidden={setIsHidden} imageSrc="/btc_convo.png" subtitle="The easiest, most enjoyable way to buy Bitcoin." />
    <Summary 
      imageSrc="/bitcoin_two.png"
      title="Hard money the easy way" 
      subtitle="Bitcoin is the biggest revolution since the internet. We believe that everyone deserves a place in this new more equable, cryptographically backed world. Nobody should be left behind because of the lack of accessibility to crypto knowledge." 
    />
    <Features 
      firstTitle="1. Knowledge in numbers"
      firstSubtitle="Join a Tribe to connect with other bitcoiners. We use community based learning to encourage collaboration and support on your journey."
      firstImage="/campfire.png"
      secondTitle="2. Curated learning modules"
      secondSubtitle="Paths are the best way to learn about Bitcoin in easily digestible, bite-size modules. They're interactive and built with beginners in mind."
      secondImage="/bitcoin_one.png"
      thirdTitle="3. Weekly audio conversations"
      thirdSubtitle="Attend regular online gatherings in the app where you can learn about new topics, ask questions and share your learning progress."
      thirdImage="/online.png"
      />
    <Testimonials speechTextOne='"I genuinely look forward to checking in with my tribe each week. It’s nice to feel supported and understood by other bitcoiners."' speechTextTwo='"Paths are my favorite part of the app. I have learned so much about bitcoin and I love how simply the information is presented."' speechTextThree='"Before Jippi I was curious about BTC but I never thought I would ever understand it. Now these concepts make way more sense to me."'/>
    <CallToAction 
      setIsHidden={setIsHidden}
      title="Your accessible Bitcoin gateway"
      subtitle="Jippi helps beginners gain access to the best money ever created. Find your financial freedom today."
    />
    <Footer />
  </> 
};

export default Home;
