import React from 'react';
import {Buttons} from './style';

const Button = (props) => {
    const {sizeButton,handleEvents,children} = props;
  
    return ( 
        <Buttons onClick={handleEvents} sizeButton={sizeButton} >{children}</Buttons>
     );
}
export default Button;