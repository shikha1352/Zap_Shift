import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router';

const RootLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayouts;