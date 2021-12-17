import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    position:relative;
    width:max(312px,100%);
    height:max(149px,17.149390243902438vw);
    background-color:green;
    overflow:hidden;

    border-radius:5px;

    > svg {
    position:absolute;
    left:-10px;
    width:max(180px,19.283536585365855vw);
    height:max(150px,17.149390243902438vw);
    }
`
export const Content = styled.div`
   padding:49px 18px 49px 32px ;

` 
export const Title = styled.div`
    font-size:var(--font-size-medium);
    font-family:var(--font-title);
    font-weight: 900 ;
    line-height:34px;
    margin-bottom:16px;
`