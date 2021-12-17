import React,{useSate, useState} from 'react';
// import { Link } from 'react-router-dom'
import Button from '../Button';
import {
    Nav,
    Wrapper,
    Logo,
    NavMenu,
    OpenMenuIcon,
    CloserMenuIcon
} from './style';


const NavBar = () => {

    const [active,setActive] = useState(false);
    
    function handleActiveListMenu(){
        setActive(current => !current);
    }
    return ( 
        <Nav>
            <Wrapper>
                <Logo>Healthy Food</Logo>
                <NavMenu active={active}>
                    <li>HEALTHY RECIPES</li>
                    <li>BLOG</li>
                    <li>JOIN</li>
                    <li>
                        <Button 
                        sizeButton={'normal'} 
                        >REGISTER</Button>
                    </li>
                </NavMenu>

                {active ? 
                <CloserMenuIcon onClick={handleActiveListMenu} /> : 
                <OpenMenuIcon onClick={handleActiveListMenu} /> }
               
            </Wrapper>
        </Nav>
     );
}
 
export default NavBar;