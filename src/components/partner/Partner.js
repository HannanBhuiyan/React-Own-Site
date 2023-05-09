import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { WhatsAppWidget } from 'react-whatsapp-widget';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
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
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={5} 
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                 className="mySwiper">
                    {PartnerData.map( (data, index) => {
                        return <SwiperSlide key={index}>
                                <img src={data.image} alt="image" />
                            </SwiperSlide>
                    })} 
                </Swiper>
                </div>
                <WhatsAppWidget phoneNumber="01987624850" />
            </div>

        </>
    )
}


export default Partner