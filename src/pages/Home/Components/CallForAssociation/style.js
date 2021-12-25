import styled from 'styled-components';


export const Container = styled.div`
    display:flex;
    align-items:center;
    position:relative;
    width: 100%;
    min-height: 48.46266471449488vw;
    height:400px;

    padding-left:13.396778916544656vw;
    ${'' /* background:brown; */}

    img{
        height: 100%;
        position:absolute;
        z-index:-1;
        top:0;
        right:0;

        @media screen and (max-width:450px){
          top:210px;
        }
    }

    @media screen and (max-width:400px){
        padding-left:unset;
    }
`
export const WrapperInput = styled.div`
    width:min(454px,100%);
    padding:0 16px 0 16px;



    >div{
        display:flex;
        place-items:center;
        >input{
            width:min(334px,100%);
            height:52px;
            border-radius:5px;
            padding-left: 20px;
            margin:10px 10px;
            border:1px solid var(--color-font-second);

            font-size:var( --font-size-normal);
        }
    }

    
`
export const Title = styled.h1`
   width:min(350px,100%);
   font-size:var(--font-size-bigg);
   font-family:var(--font-title);
   font-weight:700;
   line-height:43px;
   color:var(--color-font-primary);

   margin-bottom:32px;

`