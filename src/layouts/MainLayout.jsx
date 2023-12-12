import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <p>Test</p>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;