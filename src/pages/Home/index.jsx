import React from 'react';

import Hero  from './Components/Hero';
import ListRecipes from './Components/ListRecipes';
import BannerInfor from './Components/BannerInfor';


const Home = () => {
  return ( 
    <>
      <Hero />
      <ListRecipes />
      <BannerInfor />
    </>
  );
}
 
export default Home;