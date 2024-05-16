import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import './button.css'

const ContactMe = () => {
    return (
        <div id="contactMe" className='bg-transparent relative py-16 rounded-t-lg'>
            <div className="grid grid-cols-1 lg:grid-cols-3 px-10">
                <div className='text-white'>
                    <h3 className='text-3xl text-center border-b-8 border-dotted w-fit p-7 font-semibold mb-4'>ACHIVEMENTS</h3>
                    <p>1.</p>
                    <p>2.</p>
                    <p>3.</p>
                </div>
                {/* Contact form */}
                <div>
                    <h3 className='text-3xl text-white text-center border-b-8 mb-7 border-dotted w-fit p-7 font-semibold'>CONTACT ME</h3>
                    <form action="mailto:shahidulislam13sf@gmail.com" method="POST">
                        <input type="text" placeholder="Your Name" name="Name" className="input bg-transparent input-bordered input-primary w-full mb-2" />
                        <input type="email" placeholder="Your Email" name="Email" className="input bg-transparent input-bordered input-primary w-full mb-2" />
                        <textarea name="message" className="textarea textarea-primary w-full bg-transparent" cols="34" rows="7" placeholder="Your message here"></textarea>
                        <div className="mt-3">
                            <button className="btn1 btn-sm mr-4" type="submit">SEND</button>
                            <button className="btn1 btn-sm" type="reset">RESET</button>
                        </div>
                    </form>
                </div>

                <div className="ml-5">
                    <h3 className='text-3xl text-white text-center border-b-8 mb-7 border-dotted w-fit p-7 font-semibold'>MORE WAYS TO CONTACT</h3>
                    <div className=" grid grid-cols-3 text-5xl justify-center items-center">
                        <div className="flex flex-col gap-4">
                          <Link to='https://www.facebook.com/profile.php?id=100007891637711'><FaFacebook className="text-blue-800" /></Link>
                            <Link to=''><FaLinkedin /></Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link to=''><FaTwitter className="text-blue-800" /></Link>
                            <Link to=''><SiGmail className="text-orange-800" /></Link>
                        </div>
                        <div className="flex flex-col gap-4">
                           <Link to=''><FaGithub /></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactMe;