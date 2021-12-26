import React from 'react';

import IlustratorDesktop from '../../../../assets/images/Illustration.svg'
import IlustratorMobile from '../../../../assets/images/Ilustration_mobile.svg'

import {
  Container,
  WrapperSearch,
  SearchTitle,
  Search,
  SearchIcon,
} from './style';

const Hero = () => {
  return ( 
  <Container>
    <WrapperSearch>
      <SearchTitle>Ready for Trying a new recipe?</SearchTitle>
      <Search>
        <input type="text" placeholder='Search healthy recipe' />
        <SearchIcon />
      </Search>
    </WrapperSearch>
   <img id='illustration-desktop' src={IlustratorDesktop} alt="" />
   <img id='illustration-mobile' src={IlustratorMobile} alt="" />
  </Container>
  );
}
 
export default Hero;