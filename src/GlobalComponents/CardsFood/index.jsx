import React from 'react'

import Button from './../Button'
import imgTeste from './../../assets/images/comida_1.svg'
import {
    Container,
    Content, 
    Title,
} from './style';


const CardsFood = () => {
    return ( 
        <Container>
         
        <img src={imgTeste} alt="" />

            <Content>
                <Title>Cherry Cobble on the Grill</Title>
                <Button sizeButton={'card'}>See Recipe</Button>
            </Content>
        </Container>
    );
}
 
export default CardsFood;