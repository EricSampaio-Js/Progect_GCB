import React from 'react'
import {
    Route,Routes
} from 'react-router-dom';

// =========== PAGES ==============
import Home from '../pages/Home'

export const RouterGroups = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    )
}     