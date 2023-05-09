import React from "react";
// import WorkData from './WorkData'
import './work.css'
// import image from '../../assets/images/port1.jpg'



const Work = () => {


    const WorkData = [
         {
            workImg : "./images/port1.jpg",
            title: "Don- Learning Management"
          },

          {
            workImg : "./images/port1.jpg",
            title: "Don- Learning Management"
          },
           
          {
            workImg : "./images/port1.jpg",
            title: "Don- Learning Management"
          },
           
          {
            workImg : "./images/port1.jpg",
            title: "Don- Learning Management"
          },
           
           
        ]


    return (
        <>
            <div className="work_section">
                <div className="container">
                    <div className="common_title">
                        <h2>Our Marketplace</h2>
                        <p> Our software products provide innovative solutions for businesses of all sizes, from productivity tools to enterprise-level systems. With a focus on user experience and quality, our software helps businesses achieve their goals and streamline their operations.</p>
                    </div>
                    <div className="row">
                        {WorkData.map( (data, index) => {
                            console.log(data)
                            return (
                                <div className="col-md-3" key={index}>
                                    
                                    <a href="#">
                                        <div className="work_item">
                                            <div className="work_img">
                                                <img src={data.workImg} alt="workimage" />
                                            </div>
                                            <div className="work_content">
                                                <h2>{data.title}</h2>
                                                <div className="content_inner">
                                                    <div className="conent_left">
                                                        <span>$9</span>
                                                        <div className="review">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="content_right">
                                                        <a href="#">Live Demo</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a> 
                                </div>
                            )
                        })}
                        
                        <div className="work_button">
                            <a href="#">Go To Marketplace</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Work;