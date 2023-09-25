import React from 'react';
import Hero from './Components/Hero';
import WorkList from './Components/WorkList';
import StatList from './Components/StatList';
import FeaturedProject from './Components/FeaturedProject';

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <WorkList></WorkList>
      <StatList></StatList>
      <FeaturedProject></FeaturedProject>
    </div>
  );
};

export default page;