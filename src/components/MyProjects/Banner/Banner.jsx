import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import slider from '../../../assets/slider/slider.png'
import slider1 from '../../../assets/slider/slider1.png'
import slider2 from '../../../assets/slider/slider2.png'
import slider3 from '../../../assets/slider/slider3.png'
import slider4 from '../../../assets/slider/slider4.png'
import slider5 from '../../../assets/slider/slider5.png'
import slider6 from '../../../assets/slider/slider6.png'
import slider7 from '../../../assets/slider/slider7.png'
import slider8 from '../../../assets/slider/slider8.png'

const Banner = () => {
    return (
        <div className="relative">
            <Carousel autoPlay interval={3000} infiniteLoop>
                <div>
                    <img src={slider1} />
                </div>
                <div>
                    <img src={slider2} />
                </div>
                <div>
                    <img src={slider3} />
                </div>
                <div>
                    <img src={slider4} />
                </div>
                <div>
                    <img src={slider5} />
                </div>
                <div>
                    <img src={slider6} />
                </div>
                <div>
                    <img src={slider} />
                </div>
                <div>
                    <img src={slider7} />
                </div>
                <div>
                    <img src={slider8} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;