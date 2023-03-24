import React from "react";
import './Menu.css';
import data from './data'
 

const Menu = () => {
    
    return(
        <>
            <div className="menu_section">
                <div className="container">
                    <div className="menu_area">
                    <div className="menu_logo">
                        <a href="#">
                            <img src="./images/logo.png" alt="image" />
                            </a>
                    </div>
                    <div className="menu_item">
                        <ul>
                            {
                                data.map((data, index) => {
                                    return <li key={index}><a href="#">{ data.name }</a></li>;
                                })
                            }
                            
                        </ul>
                    </div>
                    <div className="contact_btn">
                        <a href="#">Contact</a>
                    </div>
                    </div>
                </div>
            </div>
 
        </>
    )

}

export default Menu;

