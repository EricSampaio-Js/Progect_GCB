import React from 'react'

import ImageEnd from '../../../../assets/images/bloco_final_image.svg';
import Button from '../../../../GlobalComponents/Button'
import {
    Container,
    WrapperInput,
    Title,
} from './style';

const CallForAssociation = () => {
    return ( 
        <Container>
            <WrapperInput>
                <Title>Join our membership to get special offer</Title>
                <div>
                    <input type="text" placeholder="Enter your email address" />
                    <Button sizeButton={'input'} >Join</Button>
                </div>
            </WrapperInput>

            <img src={ImageEnd} alt="" />
        </Container>
     );
}
 
export default CallForAssociation;