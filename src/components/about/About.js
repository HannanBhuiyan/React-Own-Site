import React from "react";

import './About.css'

const About = () => {

    return(
        <>
            <div className="about_section">
                <div className="container">
                    <div className="common_title">
                        <h2>About Me</h2>
                        <p>Our offers, innovations, and the latest updates of our team are posted here. Read our latest announcements to know what we are doing. We also post some technology related article as well.</p>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="about_content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="about_left">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda laboriosam
                                            atque pariatur modi beatae nisi ducimus quisquam, alias recusandae soluta repudiandae
                                            hic voluptates consequuntur dicta harum quos quas ex iusto
                                            .</p>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda laboriosam
                                            atque pariatur modi beatae nisi ducimus quisquam, alias recusandae soluta repudiandae
                                                hic voluptates consequuntur dicta harum quos quas ex iusto
                                                .</p>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda laboriosam
                                                atque pariatur modi beatae nisi ducimus quisquam, alias recusandae soluta repudiandae
                                                    hic voluptates consequuntur dicta harum quos quas ex iusto
                                        .</p>
                                    </div>
                                </div>  
                                <div className="col-md-6">
                                    <div className="about_right">
                                        
                                        <div className="skill-info">
                                            <div className="skill_left">
                                                <h4>Web Development</h4>
                                            </div>
                                            <div className="skill_right">
                                                <span>90%</span>
                                            </div>
                                        </div>
                                        <div className="progress mb-4">
                                        <div className="progress-bar barone"  role="progressbar" style={{ width: "90%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>

                                        <div className="skill-info">
                                            <div className="skill_left">
                                                <h4>App Development</h4>
                                            </div>
                                            <div className="skill_right">
                                                <span>75%</span>
                                            </div> 
                                        </div> 
                                        <div className="progress mb-4">
                                        <div className="progress-bar four" role="progressbar" style={{ width:"75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>

                                        <div className="skill-info">
                                            <div className="skill_left">
                                                <h4>Software Solutions</h4>
                                            </div>
                                            <div className="skill_right">
                                                <span>85%</span>
                                            </div>
                                        </div>
                                        <div className="progress mb-4">
                                        <div className="progress-bar bartwo" role="progressbar" style={{ width: "85%"  }}aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        
                                        <div className="skill-info">
                                            <div className="skill_left">
                                                <h4>Cloud Engineering</h4>
                                            </div>
                                            <div className="skill_right">
                                                <span>75%</span>
                                            </div> 
                                        </div> 
                                        <div className="progress">
                                        <div className="progress-bar barthree" role="progressbar" style={{ width:"75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div> 
                                    </div>
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

export default About;