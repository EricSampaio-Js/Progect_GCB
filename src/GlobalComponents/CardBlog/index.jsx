import React from 'react';

import ImmageBlogOne from '../../assets/images/blog_image_1.svg';
import ImmageBlogTwo from '../../assets/images/bloco_image_2.svg';
import ImmageBlogThree from '../../assets/images/bloco_image_3.svg';
import ImmageBlogFour from '../../assets/images/bloco_image_4.svg';

import {
Container,
Title,
User,
NameUser,
} from './style';


const dataCard = [

    { 
        image: ImmageBlogOne,
        title:'Quick-start guide to nuts and seeds',
        nameUSer:'Kevin Ibrahim'
    },
        { 
        image: ImmageBlogTwo,
        title:'Quick-start guide to nuts and seeds',
        nameUSer:'Mike Jackson'
    },
        { 
        image: ImmageBlogThree,
        title:'The top 10 benefits of eating healthy',
        nameUSer:'Bryan McGregor'
    },
    { 
        image: ImmageBlogFour,
        title:'Quick-start guide to nuts and seeds',
        nameUSer:'Kevin Ibrahim'
    },
 { 
        image: ImmageBlogFour,
        title:'Quick-start guide to nuts and seeds',
        nameUSer:'Kevin Ibrahim'
    },
 { 
        image: ImmageBlogFour,
        title:'Quick-start guide to nuts and seeds',
        nameUSer:'Kevin Ibrahim'
    },

]


const CardBlog = () => {
    return ( 
        dataCard.map(({image,title,nameUSer},key)=>(
        <Container key={key}>
        <img src={image} alt="" />
        <div>
            <Title>{title} </Title>
            <User>
            <div cicle='true'>
                <img src="" alt="" />
            </div>
                <NameUser>{nameUSer}</NameUser>
            </User>

        </div>
        </Container>

        ))    
    );
}
 
export default CardBlog;