import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="bg-black flex flex-col md:flex-row justify-between items-center gap-4 text-white py-10">
            <div className="flex gap-6 ml-7">
                <NavLink to='/'>Home</NavLink>
                <Link to='skills' smooth={true} duration={500}>Skills</Link>
                <Link to='aboutMe' smooth={true} duration={500}>About Me</Link>
                <Link to='contactMe' smooth={true} duration={500}>Contact Me</Link>
            </div>
            <div>
                <p className="md:mr-4">&copy;2023.Developed with <span className="text-lg text-red-600">&#9829;</span> by Shahidul Islam.</p>
            </div>
        </div>
    );
};

export default Footer;