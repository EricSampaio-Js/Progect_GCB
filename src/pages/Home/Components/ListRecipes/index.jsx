import React from "react";

import CardsFood from "./../../../../GlobalComponents/CardsFood";
// import {ReactComponent as Comida_1} from './../../../../assets/images/comida_1.svg'
// import {ReactComponent as Comida_2} from './../../../../assets/images/comida_2.svg'
// import {ReactComponent as Comida_3} from './../../../../assets/images/comida_3.svg'
// import {ReactComponent as Comida_4} from './../../../../assets/images/comida_4.svg'

import {
    Container,
    Title,
    SubTitle,
    List,
} from './style';


const ListRecipes = () => {
    return ( 
        <Container>
            <Title>Our Best Recipes</Title>
            <SubTitle>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
            </SubTitle>

            <List> 
                <CardsFood/>
                <CardsFood/>
                <CardsFood/>
                <CardsFood/>
            </List>

        </Container>
     );
}
 
export default ListRecipes;