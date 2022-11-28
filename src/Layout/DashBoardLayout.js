import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../DashBoard/SideBar/SideBar';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashBoardLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='lg:flex lg:flex-row gap-5'>
                <SideBar className='lg:flex-none'></SideBar>
                <Outlet className='lg:grow w-full'></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayout;