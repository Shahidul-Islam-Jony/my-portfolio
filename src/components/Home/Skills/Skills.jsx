import work from '../../../assets/images/working.png'
import book from '../../../assets/images/book.png'
import skill from '../../../assets/images/skill.png'
import ProgressBar from "@ramonak/react-progress-bar";
import './cardStyle.css'

const Skills = () => {
    return (
        <div id='skills' className='grid grid-cols-3 gap-2 my-7'>
            <div className="card">
                <div className='content w-full'>
                    <div className="-mt-20">
                        <figure><img src={work} className='border-4 border-white rounded-full p-4' alt="working" /></figure>
                        <div className="mt-5 text-lg">
                            <h2 className='bg-gray-700 mx-1 text-white p-4 text-center font-medium mb-4'>EXPERIENCE</h2>
                            <ol type='1' className='px-3'>
                                <li className='my-3'>
                                    <strong>1. Tution teacher of Information & Communication Techonology.</strong><br />
                                    01/02/2018-present<br />
                                    Lalpur,Natore,Rajshahi(Bangladesh).<br />
                                </li>
                                <hr />
                                <li className='my-3'>
                                    <strong>2. Math tution teacher of SSC</strong><br />
                                    01/04/2017-present<br />
                                    Lalpur,Natore(Bangladesh).<br />
                                </li>
                                <hr />
                                <li className='my-3'>
                                    <strong>3. Science tution teacher of SSC</strong><br />
                                    01/04/2016-present<br />
                                    Lalpur,Natore(Bangladesh).<br />
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className='content w-full'>
                    {/* Education And Training */}
                    <div className="mt-4">
                        <figure><img src={book} className='border-4 border-white rounded-full p-4' alt="education" /></figure>
                        <div className="mt-5">
                            <h2 className='bg-gray-700 text-white p-4 mx-1 text-center font-medium mb-4'>EDUCATION AND TRAINING</h2>
                            <ol type='1' className='px-3'>
                                <li className='my-3 text-lg'>
                                    <strong>1. SSC in science department</strong><br />
                                    2012-2014<br />
                                    Roghunathpur High School.<br />
                                    Roghunathpur,Lalpur,Natore,Rajshahi(Bangladesh).<br />
                                    Result: A(4.88/5.00)<br />
                                </li>
                                <hr />
                                <li className='my-3'>
                                    <strong>2. HSC in science department</strong><br />
                                    2014-2016<br />
                                    Lalpur Degree College.<br />
                                    Lalpur,Natore,Rajshahi(Bangladesh).<br />
                                    Result: A-(3.58/5.00)<br />
                                </li>
                                <hr />
                                <li className='my-3'>
                                    <strong>3. BSC in Physics department</strong><br />
                                    2018-present<br />
                                    Ishwardi Government College.<br />
                                    Ishwardi,Pabna (Bangladesh).<br />
                                    <a href="http://www.igc.edu.bd" target="blank">Ishwardi Gov. College</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className='content w-full'>
                    {/* Skills */}
                    <div className="mt-1">
                        <figure><img src={skill} className='border-4 w-[105px] h-[105px] border-white rounded-full p-4' alt="Skills" /></figure>
                        <div className="mt-5">
                            <h2 className='bg-gray-700 mx-1 text-white p-4 text-center font-medium mb-4'>Skills</h2>
                            <ul className='px-3'>
                                <p className='text-lg font-medium'>HTML</p>
                                <ProgressBar className='' bgColor='#39A3AB' completed='90' maxCompleted='100' animateOnRender='true' transitionDuration='5s'></ProgressBar>
                                <p className='text-lg font-medium'>CSS</p>
                                <ProgressBar completed='85' bgColor='#39A3AB' maxCompleted='100' animateOnRender='true' transitionDuration='5s'></ProgressBar>
                                <p className='text-lg font-medium'>JavaScript</p>
                                <ProgressBar completed='80' bgColor='#39A3AB' maxCompleted='100' animateOnRender='true' transitionDuration='5s'></ProgressBar>
                                <p className='text-lg font-medium'>React</p>
                                <ProgressBar completed='75' bgColor='#39A3AB' maxCompleted='100' animateOnRender='true' transitionDuration='5s'></ProgressBar>
                                <p className='text-lg font-medium'>Express JS</p>
                                <ProgressBar completed='70' bgColor='#39A3AB' maxCompleted='100' animateOnRender='true' transitionDuration='5s'></ProgressBar>
                                <p className='text-lg font-medium'>Node JS</p>
                                <ProgressBar completed='70' bgColor='#39A3AB' maxCompleted='100' animateOnRender='true' transitionDuration='5s'></ProgressBar>
                                <p className='text-lg font-medium'>Github</p>
                                <ProgressBar completed='80' bgColor='#39A3AB' maxCompleted='100' animateOnRender='true' transitionDuration='5s'></ProgressBar>
                                <p className='text-lg font-medium'>C</p>
                                <ProgressBar completed='80' bgColor='#39A3AB' maxCompleted='100' animateOnRender='true' transitionDuration='5s'></ProgressBar>
                                <p className='text-lg font-medium'>C++</p>
                                <ProgressBar completed='80' bgColor='#39A3AB' maxCompleted='100' animateOnRender='true' transitionDuration='5s'></ProgressBar>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;