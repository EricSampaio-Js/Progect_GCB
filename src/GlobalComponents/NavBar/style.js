import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';


export const Nav = styled.nav`
    display: flex;
    justify-content:center;
    position:fixed;
    z-index:100;
    top:0;
    left:0;
    
    width:100%;
    height:max(70px,7.540263543191801vw);   
    max-height:103px;
    padding:0 16px 0 16px;
    ${'' /* background-color:green;  */}
    font-weight:bold;

    color:var(--color-neutro-primary);

`;

export const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:min(1087px,100%);
    height:100%;

`;
export const Logo = styled.div`
    font-size:var(--font-size-bigg);
    font-weight:900;
    color:var(--color-primary);
`;

export const NavMenu = styled.div`
   display:flex;
   align-items:center;
   font-size:var(--font-size-normal);

   &>li{
        margin-left:32px;
    }
   @media screen and (max-width: 767px) {
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100vw;
    height:100vh;
    position:absolute;
    top:0;
    left:${({active}) => active ? 0 : '100%'};
    right:0;
    bottom:0;
    
    font-size:var(--font-size-bigg);
    padding-top:130px;
    background-color:gray;

    transition:all .4s;
   
   >li{
        margin-bottom:70px;
        cursor:pointer;
   }

 }
`;

 export const OpenMenuIcon = styled(MdMenu)`
    position:relative;
    z-index:100;
    font-size:40px;
    cursor:pointer;

    @media screen and (min-width: 768px){
        display:none;
    }
 `
export const CloserMenuIcon = styled(CgClose)`
   position:relative;
    z-index:100;
    font-size:40px;
    cursor:pointer;

    @media screen and (min-width: 768px){
        display:none;
    }
 
`