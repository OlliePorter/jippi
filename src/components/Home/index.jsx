import React from "react";
import Headline from "./Headline";
import Summary from "./Summary";
import Features from "./Features";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

const Home = ({ setIsHidden, subdomain }) => {

  return subdomain ? <>
    <Headline setIsHidden={setIsHidden} imageSrc="/btc_convo.png" subtitle="Jippi is the easiest, most interactive way to learn about Bitcoin. Become crypto literate with our beginner friendly social learning app." />
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
  </> : <>
      <Headline 
        setIsHidden={setIsHidden}
        imageSrc="/conversation.png"
        subtitle="A wellness app for adoptees to find community and learn valuable skills to help them thrive in life." 
      />
      <Summary 
        imageSrc="/people.png"
        title="Made for adoptees, by adoptees"
        subtitle="Our app helps adopted people everywhere to form meaningful connections and provides each individual with the skills necessary to live a more fulfilling life." 
      />
      <Features 
        firstTitle="1. Weekly Tribe gatherings"
        firstSubtitle="Tribes are a way to organise online gatherings around a 'camp-fire' and provide a structured forum through which Tribe members can share stories, give advice or offer emotional support."
        firstImage="/campfire.png"
        secondTitle="2. Build close relationships"
        secondSubtitle="Each Tribe has a Jippi moderator who helps to prompt group discussions in particular areas. Topics like vulnerability, compassion, grief, shame and gratitude, just to name a few."
        secondImage="/online.png"
        thirdTitle="3. Change destructive behaviours"
        thirdSubtitle="We've developed skill pathways to help support the formation of positive habits. Paths help you to unlearn negative beliefs, resolve painful feelings, improve your relationships, and much more."
        thirdImage="/love.png"
      />
      <Testimonials speechTextOne='"I genuinely look forward to checking in with my tribe each week. 
          It’s nice to feel supported and understood by everyone here."' speechTextTwo='"Paths are my favourite part of the app. I have learned so much about myself
          and the way my brain works as an adopted person."' speechTextThree='"Before Jippi every little thing seemed to trigger me, but
          now I feel like I’m more equipped to deal with every day life."' />
      <CallToAction
        setIsHidden={setIsHidden} 
        title="Join for free"
        subtitle="Jippi helps adopted people to find their authentic selves. Best of
        all, it won't break the bank like therapy."
      />
      <Footer />
    </>
};

export default Home;
