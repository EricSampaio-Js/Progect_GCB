import styled,{css} from 'styled-components';


function choiceButton(whichButton){
    
    const buttons = {
    normal:css`
    width:130px;
    height:52px;
    border-radius:5px;
    background-color:var(--color-neutro-primary);
    color:var(--color-primary);
    
    `,
    card:css`
    width:100px;
    height:35px;
    border-radius:5px;
    background-color:var(--color-primary);
    color:var(--color-neutro-primary);
    
    @media screen  and (min-width:1000px){
    width:134px;
    height:48px;
    font-size:var(--font-size-normal);
    }
    `,
    banner:css`
    width:150px;
    height:54px;
    border-radius:5px;
    color:var(--color-neutro-primary);
    background-color:var(--color-primary);
    
    `,

    input:css`
    width:93px;
    height:54px; 
    border-radius:5px;
    color:var(--color-neutro-primary);
    background-color:var(--color-primary);
    `,
    register:css`
    width:173px;
    height:49px;
    background:transparent;
    border:3px solid var(--color-neutro-primary);
    border-radius: 23.5px;

    font-size:16px;
    color:var(--color-neutro-primary);
    text-transform: uppercase;
    transition:all .5s;

    &:hover{
        background-color:var(--color-primary);
        border:0;
    }
    `,

    zipCode:css`
        width:97px;
        height:48px;
        color:var( --color-neutro-primary);
        font-size:var(--font-size-normal);
        background-color:#6BBC61;
        border-radius: 8px;
    `,

    send:css`
    display:flex;
    align-items:center;
    justify-content:center;
    width:350.26px;
    height:60.93px;
    background-color:#6BBC61;
    border-radius: 23.5px;
    font-size:24px;
    
    color:var(--color-neutro-primary);
    `
    }

    return buttons[whichButton]
}


export const Buttons = styled.button`
    ${props => choiceButton(props.sizeButton)}
    cursor:pointer;
    font-weight:750;
    
    &:hover{
        box-shadow: 0 3px 6px rgba(225, 248, 154, 0.918);
    }
`
 
