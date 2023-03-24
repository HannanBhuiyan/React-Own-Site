import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import PartnerData from './PartnerData'
import './Partner.css'

const Partner = () => {
 
    return(
        <>
            <div className="partner_section">
                <div className="common_title">
                    <h2>My Clients</h2>
                </div>
                <div className="container">
                <Swiper 
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={5} 
                loop={true}
                pagination={{ clickable: true }} 
                 className="mySwiper">
                    {PartnerData.map( (data, index) => {
                        return <SwiperSlide key={index}>
                                <img src={data.image} alt="image" />
                            </SwiperSlide>
                    })} 
                </Swiper>
                </div>
            </div>

        </>
    )
}


export default Partner