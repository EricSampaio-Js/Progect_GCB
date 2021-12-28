import React from 'react';
import { Link,useNavigate } from 'react-router-dom'

import Button from '../../GlobalComponents/Button'

import {
    Container,
    Wrapper,
    Messeger,
    RegisterUSer,
} from './style'

const Register = () => {

    const navigate = useNavigate()

    function handleNavigate(e){
        navigate('/')
      }
    return ( 
        <Container>
            <Wrapper>
                <Messeger>
                    <h1>Welcome!</h1>
                    <h2>
                        Register and go back to the menu,Make your order soon, <br/>
                        don't keep your stomach waiting.
                    </h2>
                   
                    <Button 
                    handleEvents={handleNavigate}
                    sizeButton={'register'}> RETURN</Button>
                </Messeger>

                <RegisterUSer>
                        <h1>Create Account</h1>

                    <form action="">

                        <fieldset>
                            <div>
                                <label htmlFor="">First Name *</label>
                                <input  type="text" />
                            </div>
                            
                            <div >
                                <label htmlFor="">Last Name  *</label>
                                <input type="text" />
                            </div>
                            {/* <br/> */}
                            <div >
                                <label htmlFor="">Birth Date *</label>
                                <input type="date"  />
                            </div>
                        </fieldset>
                     
                        <fieldset  >
                            <div >
                                <label htmlFor="">Zip code *</label>
                                <input type="text" />
                                <Button sizeButton={'zipCode'}>Search</Button>
                            </div>
                            <br/>
                            <div>
                                <label htmlFor="">Address *</label>
                                <input type="text" />     
                            </div>
                            <div>
                                <label htmlFor="">Nº *</label>
                                <input type="text" />     
                            </div>
                         
                            <div>
                                <label htmlFor="">Complement *</label>
                                <input type="text" />            
                            </div>

                            <div>
                                <label htmlFor="">Neighborhood *</label>
                                <input type="text" />
                            </div>
                          
                            <div>
                                <label htmlFor="">City *</label>
                                <input type="text" />
                            </div>
                            
                            <div>
                                <label htmlFor="">State *</label>
                                <input type="text" />
                            </div>

                        </fieldset>
                        



                    </form>
                        <Button sizeButton={'send'}>Send</Button>
                </RegisterUSer>
            </Wrapper>
        </Container>
     );
}
 
export default Register;