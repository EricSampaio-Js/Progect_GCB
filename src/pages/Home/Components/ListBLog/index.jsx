import React from 'react';
import Carrossel from './../../../../GlobalComponents/Carrossel';

import {
Container,
Contante,
Title,
SubTitle,
} from './style';

const ListBlog = () => {
    return ( 
        <Container>
            <Contante>
                <Title>Read Our Blog</Title>
                <SubTitle>
                    Far far away, behind the word mountains, far from the countries 
                    Vokalia and Consonantia, there live the blind texts.
                </SubTitle>
            </Contante>
            <Carrossel />
        </Container>
    );
}
 
export default ListBlog;