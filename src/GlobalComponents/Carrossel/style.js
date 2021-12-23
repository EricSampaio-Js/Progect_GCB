import styled from 'styled-components';

import {BsArrowRight} from 'react-icons/bs';


export const Container = styled.div`
    position:relative;
    width:calc(100% - 125px);
    min-height:336px;
    height:auto;
    ${'' /* background-color:blueviolet; */}
    
`

export const Wrapper = styled.div`
    display:flex;
    gap:24px;
    overflow-x: auto;
    height:100%;
    scroll-behavior: smooth;
    
    &::-webkit-scrollbar{
        display:none;
    }

`

export const ArrowRight = styled(BsArrowRight)`
    position:absolute;
    width:20px;
    height:20px;

    top:46%;
    right:2%;


    box-sizing:content-box;
    padding:20px;
    border-radius:50%;
    background-color:var(--color-neutro-primary);
    color:var(--color-primary);
`

export const ArrowLeft = styled(ArrowRight)`
    transform: scaleX(-1);
    right:unset;
    left:2%;
    display:none;

    cursor:pointer;
`

export const GradientWhite = styled.div`
    position:absolute;
    width:40%;
    height:100%;
    top:0;
    right:0;
    background: linear-gradient(88.37deg, rgba(255, 255, 255, 0) 6.93%, #FFFFFF 113.89%);
   
`