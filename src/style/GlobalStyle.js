import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* ============= REST CONFIGURATIONS ============== */
    *,:before,:after{
        margin:0px;
        padding: 0px;
        box-sizing:border-box;

        text-decoration: none;
        list-style: none;
    }

    button,input{
        outline:none;
        border: 0;
    }

    html{
      font-size:14px;
      transition:all .3s;
      @media screen and (min-width:950px){
        font-size:16px;
      }
    }

    :root{
        /* =========== FONT AND TIPOGRAFY ============ */
        --font-title:'Montserrat ', sans-serif;
        --font-body:'muli', sans-serif;
        --font-size-normal:1rem;
        --font-size-medium:1.5rem;
        --font-size-bigg:2rem;
        --font-size-extra-bigg:3rem;

        /* ============ COLOR ================= */
        --color-primary:#BADC58;
        --color-font-primary:#1D164D;
        --color-font-second:#9E9BAF;
        --color-neutro-primary:#FFFFFF;
        --color-neutro-second:#FAFAFC;
    }

    body{
        margin-top:max(70px,7.540263543191801vw);
        
        @media screen and (min-width:1198px){
            margin-top:unset;
        }
    }

    html,body{
        font-family:var(--font-body);
        max-width:100vw;
        max-height:100vh;

        width:100%;
        height:100%;
    }

    a:visited{
        color:var(--color-neutro-primary);
    }

   

`