import React from 'react'

import Button from './../Button'

import ComidaOne from './../../assets/images/comida_1.svg'
import ComidaTwo from './../../assets/images/comida_2.svg'
import ComidaThree from './../../assets/images/comida_3.svg'
import ComidaFour from './../../assets/images/comida_4.svg'

import {
    Container,
    Content, 
    Title,
} from './style';

const dataCards = [
    {img:ComidaOne, title:'Broccoli Salad with Bacon'},
    {img:ComidaTwo, title:'Classic Beef Burgers'},
    {img:ComidaThree, title:'Classic Potato Salad'},
    {img:ComidaFour, title:'Cherry Cobbler on the Grill'}
]


const CardsFood = () => {
    return ( 

        dataCards.map(({img,title}) =>(
        <Container>
            <img src={img} alt="" />
            <Content>
                <Title>{title}</Title>
                <Button sizeButton={'card'}>See Recipe</Button>
            </Content>
        </Container>    

        ))
        
    );
}
 
export default CardsFood;