import reactLogo from '../../../assets/react.svg'
import '../../../../src/App.css'


const Banner = () => {
    return (
        <div>
            <div className='flex justify-end p-2 lg:p-4'>
                <a>
                </a>
                <a href="https://react.dev" target="_blank" className=''>
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <div>
                <span className='satisfyFont text-center text-7xl space-y-7'>
                    <p className='font-semibold'>I am a MERN Stack</p>
                    <p className='font-semibold'>Web developer</p>
                </span>
                <span>
                    <p className='text-center mt-12 text-xl text-gray-700'>Hi, My name is Shahidul Islam. <br />
                        I am a MERN stack web developer. I want to design user interactive & beautiful website.<br/> Weclome to my portfolio page that I have designed to show my skills and expertise.
                    </p>
                </span>
            </div>
            <div className='flex justify-start p-2 lg:p-4'>
                <a>
                </a>
                <a href="https://react.dev" target="_blank" className=''>
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
        </div>
    );
};

export default Banner;