// ================ REACT ================
import React from 'react';
import { RouterGroups }  from './routes/router';
// ========== STYLED =============
import  {GlobalStyle} from './style/GlobalStyle';
import NavBar from './GlobalComponents/NavBar';

const App = () => {
    return ( 
    <>  
        <GlobalStyle />
        <NavBar />
        <RouterGroups />
    </>
    );
}
export default App;