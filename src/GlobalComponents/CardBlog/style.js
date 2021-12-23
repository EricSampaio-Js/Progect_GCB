import styled from 'styled-components';


export const Container = styled.div`
    flex:none;
    width:235px;
    height:314px;
    border-radius:10px;
    overflow:hidden;

    margin-bottom:30px;

    box-shadow: 0 20px 20px 0 rgba(201, 198, 198, 0.815);

  
    >div{
        padding:20px;
    }

    >img{
        width:100%;
        height:auto;
    }

    @media screen and (min-width:1200px){
        width:348px;
        height:450px;

        >div{
            padding:24px 32px;
        }

        >img{
        width:100%;
        height:247px;
        }
    }

`

export const Title = styled.h1`
    font-family:var(--font-title);
    font-size:20px;
    margin-bottom:20px;
    color:var(--color-font-primary);

    @media screen and (min-width:1200px){
        font-size:27px;
        line-height:32px;
        font-weight: 600;


    }
`

export const User = styled.div`
    display:flex;
    align-items:center;
    
[cicle='true']{
    width:40px;
    height:40px;
    border-radius:100%;
    background-color:gray;

}

@media screen and (min-width:1200px){

    [cicle='true']{
        width:52px;
        height:52px;
    }

}
`

export const NameUser = styled.span`
    font-weight:400 ;
    font-size:12px;
    color:var(--color-font-second);
    margin-left:10px;

    @media screen and (min-width:1200px){
        font-size:var(--font-size-normal);
    }

`
