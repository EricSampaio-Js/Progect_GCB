import React,{useRef} from 'react';

import CardBlog from '../CardBlog';

import {
Container,
Wrapper,
ArrowRight,
GradientWhite,
} from './style';

const Carrossel = () => {
    const carrosel = useRef(null)

    function handleClickRight(e){
        carrosel.current.appendChild(carrosel.current.firstElementChild)
    }  
       

    return ( 
        <Container>
            <GradientWhite>
                <ArrowRight onClick={handleClickRight} /> 
            </GradientWhite>    
            <Wrapper ref={carrosel} >
                <CardBlog />
            </Wrapper>
        </Container>
    );
}
 
export default Carrossel;