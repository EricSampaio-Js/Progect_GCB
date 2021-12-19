import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:323px;
    height:138px;
    border-radius:5px;
    box-shadow: -5px 15px 25px 0px rgba(201, 198, 198, 0.815);
 
    > img {
        width:162px;
        height:100%;
    }

    @media screen and (min-width:850px){
    display:flex;
    width:max(312px,100%);
    height:max(149px,17.149390243902438vw);
    > img {
    width:max(180px,19.283536585365855vw);
    height:max(150px,17.149390243902438vw);
    }
    }
`
export const Content = styled.div`
padding: 30px 10px 0 10px  ;

@media (min-width: 982px){
@media (min-width: 982px){
    ${'' /* padding:49px 18px 49px 32px ; */}
    padding:9.28030303% 3.409090909%  9.28030303% 6.060606061% ;
}
 

` 
export const Title = styled.div`
font-size:calc(var(--font-size-medium) - 3px);
font-family:var(--font-title);
font-weight: 550;
color:var(--color-font-primary);
margin-bottom:16px;

@media screen and (min-width: 982px){   
font-family:var(--font-title);
color:var(--color-font);
font-weight: 900 ;
margin-bottom:16px;

}
@media screen and (min-width:1142px){
    font-size:calc(var(--font-size-medium));
    line-height:34px;
}

`