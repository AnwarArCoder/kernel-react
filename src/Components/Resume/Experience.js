import React, { useEffect, useState } from 'react';
import './resume.css';

// React Axios
import axios from 'axios';

// React Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';


function Experience() {

    const [ experienceItem, setExperienceItem ] = useState({});

    useEffect( () =>{
        axios.get('fakeData/db.json')
        .then( res => {
            setExperienceItem(res.data.exp);
        } );
    }, [] );

    const boxItem = experienceItem.map( box => {
        return(
            <SwiperSlide className="item" key={box.id}>
                 <div className="experience-details">
                     <i className="fa fa-briefcase"></i>
                     <div className="details-title">
                         <h5>{box.title}</h5>
                         <span>{box.details}</span>
                     </div>
                 </div>
                 <div className="experience-date">
                     {box.date}
                 </div>
             </SwiperSlide>
        );
    } );

    return (
        <div className="resume-experience-box">
            <div className="experience-title">
                <h3>Experience</h3>
            </div>
            <Swiper
                className='experience-content'
                spaceBetween={0}
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                }}
            >
                {boxItem}
            </Swiper>
        </div>
    );
}

export default Experience