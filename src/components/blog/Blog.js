import React from "react";
import BlogData from "./BlogData";
import './Blog.css'

const Blog = () => {
    return(
        <>
            <div class="blog_section">
                <div class="container">
                    <div class="common_title">
                        <h2>Latest Articles</h2>
                        <p>Our offers, innovations, and the latest updates of our team are posted here. Read our latest announcements to know what we are doing. We also post some technology related article as well.</p>
                    </div>
                    <div class="blog_inner">
                        <div class="row">
                            {BlogData.map((value, index) => {
                                return(
                                    <div class="col-md-4" key={index}>
                                        <div class="blog_item">
                                            <div class="blog_item_img">
                                                <img src={ value.blogImage } alt="" />
                                            </div>
                                            <div class="blog_item_content">
                                                <div class="blog_content_title">
                                                    <div class="author">
                                                    { value.role }
                                                    </div>
                                                    <div class="publishdate">
                                                    { value.datatime }
                                                    </div>
                                                </div>
                                                <p>{value.blogTitle }</p>
                                                <a href="#">{ value.blogBtn }</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog