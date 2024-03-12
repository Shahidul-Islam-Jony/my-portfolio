import jony from '../../../assets/images/jony.png'


const AboutMe = () => {
    return (
        <div id="aboutMe" className='bg-[#39A4AC] py-16 rounded-lg'>
            <span className='flex justify-center mb-16'>
                <h3 className='text-5xl text-center border-b-8 border-dotted w-fit p-7 text-white font-semibold'>ABOUT ME</h3>
            </span>
            <div className="">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-44">
                    <img src={jony} className="w-72 h-72 rounded-full border-8 border-white shadow-2xl" />
                    <div className='text-white text-xl fira ml-4 mt-5'>
                        <p>I am a MERN stack web developer.</p>
                        <p className='border-b-2 pb-3'>I want to make user interactive website.So that user can easily understood web</p>
                        <p className='border-b-2 py-3'>Name : Shahidul Islam</p>
                        <p className='border-b-2 py-3'>Address : Rajshahi, Bangladesh</p>
                        <p className='border-b-2 py-3'>Email : <a href="mailto:shahidulislam13sf@gmail.com">shahidulislam13sf@gmail.com</a></p>
                        <p className='border-b-2 py-3'>Phone : <a href="tel:+8801734845697">+8801734845697</a></p>
                        <p className='border-b-2 py-3'>Facebook : <a href="https://www.facebook.com/profile.php?id=100007891637711">Follow Me On Facebook</a></p>

                        <p><a href="https://drive.google.com/file/d/1e1kVYu5B926zSdngXC5xOLbZQokFCLuE/view?usp=sharing" target="blank" download="Shahidul Islam Resume.pdf">
                    <button className="btn btn-outline text-white mt-9">Download Resume</button>
                 </a>
            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;