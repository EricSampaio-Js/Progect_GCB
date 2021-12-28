import React from 'react'
import {
    Route,Routes
} from 'react-router-dom';

// =========== PAGES ==============
import Home from '../pages/Home';

import Register from '../pages/Register'

export const RouterGroups = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Register' element={<Register/>}/>
        </Routes>
    )
}     