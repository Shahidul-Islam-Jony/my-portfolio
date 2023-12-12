import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/world3.png'


const Navbar = () => {
    const [isActive, setisActive] = useState(true);
    const links = <div className="flex flex-col md:flex-row gap-7 text-white text-lg">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/myProjects'>My Projects</NavLink>
        <NavLink to='skills'>Skills</NavLink>
        <NavLink to='resume'>Resume</NavLink>
        <NavLink to='aboutMe'>About Me</NavLink>
        <NavLink to='contactMe'>Contact Me</NavLink>
    </div>
    return (
        <div>
            <div className="navbar bg-[#0C6168] rounded-b-md px-4">
                <div className="md:navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" onClick={() => setisActive(true)} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} onClick={() => setisActive(false)} className={`${isActive ? ' menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0C6168] rounded-box w-52' : 'hidden'}`}>
                            {/* small devices */}
                            {links}
                        </ul>
                    </div>
                    <div className="flex w-full items-center">
                        <img src={logo} className="w-14 h-14 md:w-20 md:h-20 rounded-full" alt="" />
                        <p className="text-white text-2xl md:text-3xl font-serif font-bold ml-4  w-full">Shahidul Islam</p>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* large devices links */}
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;