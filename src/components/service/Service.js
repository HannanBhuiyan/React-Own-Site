import React from "react";

import './Service.css';
 


const Service = () => {

    return(
        <>
            <div className="service_section">
                <div className="container">
                    <div className="common_title">
                        <h2>Service </h2>
                        <p>Our offers, innovations, and the latest updates of our team are posted here. Read our latest announcements to know what we are doing. We also post some technology related article as well.</p>
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
                                            I offer different type web development services like personal and companies websites, 
                                            school/college portals and also different type management applications.
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
                                            I offer different type software solutions service like database solution, storage solution, 
                                            servers solution, software architecture solution etc.
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
                                            I provide different type cloud engineering services like cloud computing, 
                                            DevOps, Virtual Reality, Machine learning, Internet Of Things(IOT) etc.
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
                                            I provide different type cloud engineering services like cloud computing, 
                                            DevOps, Virtual Reality, Machine learning, Internet Of Things(IOT) etc.
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
