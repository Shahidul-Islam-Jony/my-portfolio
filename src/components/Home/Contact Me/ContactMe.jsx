
const ContactMe = () => {
    return (
        <div id="contactMe" className='bg-[#39A4AC] py-16 rounded-lg'>
            <div className="grid grid-cols-3">
                <div className='text-white p-4'>
                    <h3 className='text-3xl text-center border-b-8 border-dotted w-fit p-7 font-semibold'>ACHIVEMENTS</h3>
                    <p>1.</p>
                    <p>2.</p>
                    <p>3.</p>
                </div>
                {/* Contact form */}
                <div>
                    <h3 className='text-3xl text-white text-center border-b-8 mb-7 border-dotted w-fit p-7 font-semibold'>CONTACT ME</h3>
                    <form action="mailto:shahidulislam13sf@gmail.com" method="POST" enctype="text/plain">
                        <input type="text" placeholder="Your Name" name="Name" className="input input-bordered input-primary w-full max-w-xs mb-2" />
                        <input type="email" placeholder="Your Email" name="Email" className="input input-bordered input-primary w-full max-w-xs mb-2" />
                        <textarea name="message" className="textarea textarea-primary" cols="42" rows="7" placeholder="Your message here"></textarea>
                        <div className="mt-3">
                            <button className="btn btn-secondary btn-sm mr-4" type="submit">SEND</button>
                            <button className="btn btn-secondary btn-sm" type="reset">RESET</button>
                        </div>
                    </form>
                </div>

                <div>
                <h3 className='text-3xl text-white text-center border-b-8 mb-7 border-dotted w-fit p-7 font-semibold'>MORE WAYS TO CONTACT</h3>
                    
                </div>

            </div>
        </div>
    );
};

export default ContactMe;