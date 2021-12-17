import React from 'react';
import { ReactComponent as Ilustrator } from '../../../../assets/images/Illustration.svg';

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
    <Ilustrator  />
  </Container>
  );
}
 
export default Hero;