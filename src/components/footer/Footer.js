import React from "react";
import './Footer.css'
import FooterData from './FooterData'


const Footer = () => {

    return(
        <>
        <div class="footer_section">
            <div class="container">
                <div class="footer_wrapper">
                <div class="footer_top">
                    <div class="footer_item">
                    <a href="#">
                        <img width="80px" src="./images/logo.png" alt="image" />
                    </a>
                    </div>
                    <div class="footer_item">
                    <h2>Let’s Talk?</h2>
                    </div>
                    <div class="footer_item">
                    <a class="chatbtn" href="#">LET’S CHAT</a>
                    </div>
                </div>
                <div class="footer_bottom">
                    <div class="footer_menu">
                        <ul>
                            {FooterData.map( (value, index) => {
                               return <li key={index}><a href="#">{ value.name }</a></li>
                            })}
                        </ul>
                    </div>
                    <div class="footer_text">
                        <p>Copyright By	&copy;Hannan Bhuiyan - 2019</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </>
    )

}

export default Footer