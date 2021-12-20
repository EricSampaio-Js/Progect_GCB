import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;

    #banner-desktop{
        display:none;
    }

    @media screen and (min-width:730px ){
      
        flex-direction:row;
        >#banner-desktop{
            display:unset;
            position:relative;
            z-index:-1;
            max-height:53.22108345534407vw;
            height:auto;
           
        }

        #banner-mobile{
            display:none;
        }
    }

    

`
export const Content = styled.div`
   padding:18% 16px 0 16px;

   > button {
       display:block;
       margin: auto;
    }

 @media screen and (min-width:730px ){
    display:flex;
    font-family:var(--font-title);
    flex-direction:column;
  
    padding-top:20px;
;

    > button {
       display:block;
       margin: unset;
    }
 }


 @media screen and (min-width:900px ){
    padding-top:10.468521229868228vw;
 }
 
`
export const Title = styled.h1`
    font-size:min(var(--font-size-extra-bigg), 8.88888888888889vw);
    font-family:var(--font-title);
    text-align:center;
    line-height:min(70px,11.944444444444445vw);
    margin-bottom:7%;
    color:var(-color-font-primary);


    @media screen and (min-width:730px ){
    width:100%;
    max-width:400px;
    font-size:min(var(--font-size-bigg),3.314vw);
    line-height:min(43px,4.14vw);
    margin-bottom:min(32px,2.054vw);
    text-align:unset;
    }
`

export const Text = styled.div`
    width:100%;
    line-height:1.5;
    font-size: min(20px,3.55vw);
    color:var(--color-font-second);

    >p{
        margin-bottom:5.555555556%;
    }

    >p:last-child{
        margin-bottom:100px;
    }

 
    
    @media screen and (min-width:730px ){
    font-size:var(--font-size-normal);
    line-height:27px;
   
    width:100%;
    max-width:380px;
    font-weight:400;

    >p{
        margin-bottom:min(41px,1.780vw);
    }

    >p:last-child{
        margin-bottom:min(48px,3vw);
    }

}

`