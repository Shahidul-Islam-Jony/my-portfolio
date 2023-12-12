import AboutMe from "../../components/Home/AboutMe/AboutMe";
import Banner from "../../components/Home/Banner/Banner";
import ContactMe from "../../components/Home/Contact Me/ContactMe";
import Skills from "../../components/Home/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;