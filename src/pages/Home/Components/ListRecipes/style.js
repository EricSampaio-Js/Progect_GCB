import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   max-height:760px;
   height:auto;
   background-color:var(--color-neutro-second);
   padding:34px;
`
export const Title = styled.div`
    font-size:var(--font-size-bigg);
    font-family:var(--font-title);
    font-weight:700;
    text-align: center;
    margin-bottom:20px;
   
`

export const SubTitle = styled.div`
    text-align: center;
    width: 100%;
    max-width:500px;
    line-height:1.5;
    font-weight:400 ;

    font-size:var(--font-size-normal);
    margin:auto;
    color:var( --color-font-second);
`

export const List = styled.div`
    display:grid;
    justify-content:center;
    grid-template-columns:repeat(auto-fill,323px);
    grid-template-rows:138px;
    gap:16px; 
    padding:0 16px 0 16px;
    margin-top:32px;

    @media screen and (min-width: 850px) {
    grid-template-columns:repeat(auto-fill,minmax(323px,38.65300146412884vw));
    grid-template-rows:max(149px,17.149390243902438vw);
    gap:32px; 
    }

 `
