import React,{useRef} from 'react';

import CardBlog from '../CardBlog';

import {
Container,
Wrapper,
ArrowRight,
ArrowLeft,
GradientWhite,
} from './style';

const Carrossel = () => {
    const carrosel = useRef(null)

    function handleClickRight(e){
        // e.stopPropagation();
        // e.preventDefault();

        carrosel.current.scrollLeft += 372;
        
        console.log(carrosel.current.scrollLeft)

    }

    return ( 
        <Container>
            <GradientWhite>
                <ArrowRight onClick={handleClickRight} /> 
            </GradientWhite>    
            <Wrapper ref={carrosel} >
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
            </Wrapper>
            {/* <GradientWhite>
                <ArrowLeft />
            </GradientWhite>  */}
          
        </Container>
     );
}
 
export default Carrossel;