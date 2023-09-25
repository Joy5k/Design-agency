import React from 'react';
import Hero from './Components/Hero';
import WorkList from './Components/WorkList';
import StatList from './Components/StatList';

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <WorkList></WorkList>
      <StatList></StatList>
    </div>
  );
};

export default page;