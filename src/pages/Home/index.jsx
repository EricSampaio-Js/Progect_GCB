import React from 'react';

import Hero  from './Components/Hero';
import ListRecipes from './Components/ListRecipes';
import BannerInfor from './Components/BannerInfor';
import ListBlog from './Components/ListBLog';

const Home = () => {
  return ( 
    <>
      <Hero />
      <ListRecipes />
      <BannerInfor />
      <ListBlog />
      
    </>
  );
}
 
export default Home;