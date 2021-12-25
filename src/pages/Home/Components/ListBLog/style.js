import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    width: 100%;
    min-height: 56.22254758418741vw;
    height:auto;

    padding-top:50px;

    background-color:var( --color-neutro-second);

    @media screen and (max-width:734px){
        align-items:center;
    }

`

export const Contante = styled.div`
    align-self:center;
    width:100%;
    max-width:501px;

    margin-bottom:30px;
`
export const Title = styled.h1`
    color:var(--color-font-primary);
    font-size:var(--font-size-bigg);
    font-family:var(--font-title);

    font-weight:700;
    text-align:center;

    margin-bottom:10px;
`

export const SubTitle = styled.h2`
    color:var(--color-font-second);
    font-size:var(--font-size-normal);
    text-align:center;
    line-height:1.5;
    font-weight:300;
`
