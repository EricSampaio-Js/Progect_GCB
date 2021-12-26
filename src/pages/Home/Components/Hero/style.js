import styled from 'styled-components';
import {CgSearch} from 'react-icons/cg'

export const Container = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    align-items:center;
    width:100%;
    min-height:calc(100vh + 38vh);
    heigth:auto;
    overflow: hidden;

    >img{
    position:absolute;
    top:200px;
    width:650px;
    height:auto;
    z-index:-1;
    }

    #illustration-desktop{
        display:none;
    }

    @media screen and (min-width:1198px){
        flex-direction:row;
        min-height:calc(100vh + 200px);

        img{
            position:absolute;
            top:-60px;
            right:0;
            width:100%;
            max-width:800px;
            height:800px;
            z-index:-1;
        }

        #illustration-desktop{
        display:block;
        }

        #illustration-mobile{
            display:none;
        }

    }

  
`

export const WrapperSearch = styled.div`
    width:min(600px,100%);
    padding-top:40px;

    @media screen and (min-width:1198px){
        padding-left: 6.935975609756097vw;
        width:min(470px,100%);
    }
`

export const SearchTitle = styled.div`
    
    font-family:var(--font-title);
    font-size:calc(var(--font-size-extra-bigg) + max(10px,min(20px,2.77vw))) ;
    line-height:1.46;
    font-weight: 900;
    text-align:center;
    padding:0 16px 0 16px;
    width:100%;
    
    @media screen and (min-width:1198px){
        width:329px;
        font-size:var(--font-size-extra-bigg) ;
        text-align:unset;
    }
`

export const Search = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
    height: 48px;
    margin-top:32px;
    padding:0 16px 0 16px;

    @media screen and (min-width:1198px){
        justify-content:unset;
    }

    > input{
        width: 100%;
        height:100%;
        max-width: 337px; 
        border-radius: 5px;
        padding-left: 20px;
        margin-right: 1rem;
        color:var( --color-font-primary);
        font-size: var(--font-size-normal);
        border:1px solid var(--color-font-second);
        &::placeholder{
            font-size: calc(var(--font-size-normal));
        }
    }
   
`

export const SearchIcon = styled(CgSearch)`
    color:var(--color-neutro-primary);
    background-color:var(--color-primary);
    box-sizing: content-box;
    padding: 14px 16px;
    border-radius: 5px;
    font-size: 20px;

    > path {
        width: 40px;
        height: 40px;
    }
`
