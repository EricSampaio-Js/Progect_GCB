import React from 'react'
// import {ReactComponent as ComidaOne} from './../../assets/images/comida_1.svg'

import {
    Container,
    Content, 
    Title,
} from './style';


const CardsFood = () => {
    return ( 
        <Container>
         
            {/* <ComidaOne /> */}
            <img src={require('./../../GlobalComponents/../assets/images/comida_1.svg')} alt="" />
           
            <Content>
                <Title>Cherry Cobble on the Grill</Title>
                <button>See Recipe</button>
            </Content>
        </Container>
    );
}
 
export default CardsFood;