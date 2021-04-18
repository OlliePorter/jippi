import React from 'react';
import Headline from './Headline';
import Summary from './Summary';
import Features from './Features';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';

const Home = () => {
  return (
    <>
			<Headline/>
			<Summary/>
			<Features/>
      <Testimonials/>
      <CallToAction/>
    </>
  );
};

export default Home;
