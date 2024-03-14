import { useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from '../../assets/images/world3.png'
import logo from '../../assets/images/jony.png'

import { Link } from 'react-scroll';


const Navbar = () => {
    const [isActive, setisActive] = useState(true);
    const links = <div className="flex flex-col md:flex-row gap-7 text-white text-lg">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/myProjects'>My Projects</NavLink>
        <Link to='skills'  smooth={true} duration={500}>Skills</Link>
        <a href="https://drive.google.com/file/d/1e1kVYu5B926zSdngXC5xOLbZQokFCLuE/view" target="blank" download="Shahidul Islam Resume.pdf">Resume</a>
        <Link to='aboutMe'  smooth={true} duration={500}>About Me</Link>
        <Link to='contactMe'  smooth={true} duration={500}>Contact Me</Link>
    </div>
    return (
        <div>
            <div className="navbar relative shadow-md bg-[#0C6168] rounded-b-lg  z-50">
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
                    <div className="flex items-center">
                        <img src={logo} className="w-14 h-14 border-4 md:w-20 md:h-20 rounded-full" alt="" />
                        <p className=" text-2xl md:text-4xl satisfyFont font-bold ml-4 bg-gradient-to-r from-orange-600 to-pink-500 text-transparent bg-clip-text">Shahidul Islam</p>
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