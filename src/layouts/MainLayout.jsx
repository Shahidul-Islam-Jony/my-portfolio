import {  Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ParticleJs from '../components/Home/ParticleJs/ParticleJs';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <ParticleJs></ParticleJs>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;