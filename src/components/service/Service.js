import React from "react";

import './Service.css';
 


const Service = () => {

    return(
        <>
            <div className="service_section">
                <div className="container">
                    <div className="common_title">
                        <h2>Service </h2>
                        <p> Our technology services cover a wide range of areas, including software development, cloud computing, mobile app development and more. With our expertise in emerging technologies and industry best practices, we help businesses leverage technology to gain a competitive edge and drive growth.</p>
                    </div> 
                    <div className="row">   
                        <div className="col-md-6 col-12">
                            <div className="service_item" style={{ backgroundColor: "#59c378" }}>
                                <div className="service_item_inner" style={{ marginBottom: "40px" }}>
                                    <div className="service_img"> 
                                        <img src="./images/development.svg" alt="image" />
                                    </div>
                                    <div className="service_content">
                                        <h2>Web Development</h2>
                                        <p> 
                                        Our team provides end-to-end web app development services, delivering high-quality solutions that meet business requirements and user expectations
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="service_item" style={{ backgroundColor: "#FEA301" }}> 
                                <div className="service_item_inner">
                                    <div className="service_img"> 
                                        <img src="./images/softwaresoluation.svg" alt="image" />
                                    </div>
                                    <div className="service_content">
                                        <h2>Software Solutions</h2>
                                        <p> 
                                        We provide scalable and secure software solutions that drive innovation and streamline operations for businesses of all sizes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="service_item" style={{ backgroundColor: "#1B434D" }}>
                                <div className="service_item_inner">
                                    <div className="service_img"> 
                                        <img src="./images/mobile-app.png" alt="" />
                                    </div>
                                    <div className="service_content">
                                        <h2>App Development</h2>
                                        <p>
                                        We offer comprehensive mobile app development services, from concept to deployment, for iOS and Android platforms, using the latest technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="service_item" style={{ backgroundColor: "rgb(108, 108, 229)" }}>
                                <div className="service_item_inner">
                                    <div className="service_img">  
                                        <img src="./images/cloud.svg" alt="" />
                                    </div>
                                    <div className="service_content">
                                        <h2>Cloud Engineering</h2>
                                        <p>
                                        Our cloud engineering services help businesses harness the power of cloud computing, with expertise in AWS, Azure, and Google Cloud.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>  
                </div>
            </div>
        </>
    )

}

export default Service;
