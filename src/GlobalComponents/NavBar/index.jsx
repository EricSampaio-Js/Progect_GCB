import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom'
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

    const navigate = useNavigate();

    function handleActiveListMenu(){
        setActive(current => !current);
    }

  function handleNavigate(e){
    navigate('Register')
  }
    return ( 
        <Nav>
            <Wrapper>
                <Logo>Healthy Food</Logo>
                <NavMenu active={active}>
                  
                    <li> <Link to={'#'}>HEALTHY RECIPES</Link></li>
                    <li><Link to={'#'}>BLOG</Link></li>
                    <li><Link to={'#'}>JOIN</Link></li>
                    <li >
                        <Button 
                        sizeButton={'normal'}
                        handleEvents={handleNavigate}
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