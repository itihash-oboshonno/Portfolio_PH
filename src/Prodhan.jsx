import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const Prodhan = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-120px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Prodhan;