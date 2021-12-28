import styled from 'styled-components';



export const Container = styled.div`
    display:flex;
    position:absolute;
    top:0;
    justify-content:center;
    align-items:center;
    background-color:#D1D0D8;
    width:100%;
    min-height:100vh;
`

export const Wrapper = styled.div`
    width:100%;
    min-height:calc(100vh - 45px);
    height:auto;
    
    background-color:var(--color-neutro-primary);

    padding: 0 16px 0 16px;


    @media screen and (min-width:1326px){
        padding: 0 0 0 16px;
        display:grid;
        grid-template-columns: 1fr 600px ;
       
    }
`

export const Messeger = styled.div`
    position:absolute;
    top:0;
    left:0;

    width:100%;
    min-height:339px;
    height:auto;
    background-color:#6BBC61;

    color:var(--color-neutro-primary);
    border-radius: 0px 0px 71px 81px;

    text-align:center;

    padding-top:100px;
    padding-bottom:50px;

    h1,h2{
        font-family:var(--font-title);
    }

    h1{
        font-size:70px;
        margin-bottom:41px;
    }
    h2{
        font-size:calc(var( --font-size-normal));
        font-weight:normal;
        line-height:24px;

        margin-bottom:53px;
       
    }

    @media screen and (min-width:1326px){
    position:unset;
    width:100%;
    height:100%;
    border-radius: 0px 0px 0 0;
    order:2;

    padding-top:195px;
}
`

export const RegisterUSer = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;

        > button{
            display:block;
            text-align:center;

            margin:40px;
        }

    form{
        width:100%;
        max-width:900px;

       
    }
    h1{
        font-family:var(--font-title);
        font-size:min(48px,8.88vw);
        font-wight:700;
        color:#6BBC61;

        margin-top:450px;

        text-align:center;
        margin-bottom:69px;

        @media screen and (min-width:1326px){
            margin-top:170px;
        }
    }

    label{
        font-size:12px;
        font-weight:bold;
        display:block;
    }

    input{
        width:100%;
        height:52px;
        font-size:var(--font-size-normal);

        border-radius:5px;
        border:1px solid black;

        margin-bottom:10px;
        padding-left:10px;


        @media screen and (min-width:848px){
            width:335px; 
            margin-right:24px;    

        }
       
    }

    
    fieldset{
        border:0;
    }

    fieldset>div{
       
        margin-bottom:24px;

        @media screen and (min-width:848px){
            display:inline-block;
        }
    }
   
`
