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
                <Title></Title>
                <SubTitle></SubTitle>
            </Contante>

            <Carrossel />
        </Container>
    );
}
 
export default ListBlog;