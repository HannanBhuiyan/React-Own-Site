import React from "react";

import '../hero/Hero.css';
 

const Hero = () => {

    return (
        <>
            <div className="hero_section">
                <div className="container">
                    <div className="hero_area">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                        <div className="hero_content">
                            <span>Hello,</span>
                            <h2>I'm Hannan</h2>
                            <p>Software Engineer &
                                <br />
                                Cloud Engineering Expert.
                            </p>
                            <div className="social_icon">
                                <ul>
                                <li>
                                    <a href="#">  <i className='fa fa-facebook'></i> </a>
                                </li>
                                <li>
                                    <a href="#">  <i className='fa fa-linkedin'></i> </a>
                                </li>
                                <li>
                                    <a href="#">  <i className='fa fa-github'></i> </a>
                                </li>
                                </ul>
                            </div>
                            <div className="button_group">
                                <a href="./images/CV3.pdf" download className="btn_download">Download CV 	&#160; <i className="fa fa-download"></i></a>
                                <a href="#" className="btn_hire">Hire Me 	&#160; <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>

                        </div>
                        <div className="col-md-5 text-end">
                        <div className="hero_image_section">
                            <img src="./images/banner-removebg-preview.png" alt="banner_img" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Hero;

