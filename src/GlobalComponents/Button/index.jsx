import React from 'react';
import {Buttons} from './style';

const Button = (props) => {
    const {sizeButton,children} = props;
    console.log(sizeButton)
    return ( 
        <Buttons sizeButton={sizeButton} >{children}</Buttons>
     );
}
export default Button;