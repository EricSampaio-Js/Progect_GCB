import React from "react";

import CardsFood from "./../../../../GlobalComponents/CardsFood";

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
            </List>

        </Container>
     );
}
 
export default ListRecipes;