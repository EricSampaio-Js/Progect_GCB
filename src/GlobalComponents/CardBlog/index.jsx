import React from 'react';

import ImmageBlog from '../../assets/images/bloco_image_2.svg';

import {
Container,
Title,
User,
NameUser,
} from './style';

const CardBlog = () => {
    return ( 
    <Container>
        <img src={ImmageBlog} alt="" />
        <div>
            <Title>What M
Healthy Nutrition: </Title>
            <User>
            <div cicle='true'>
                <img src="" alt="" />
            </div>
                <NameUser>Kevin Ibrahim</NameUser>
            </User>

        </div>
    </Container>

    );
}
 
export default CardBlog;