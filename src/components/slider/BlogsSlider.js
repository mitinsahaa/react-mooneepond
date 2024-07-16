import React, { Component } from 'react';
import Slider from 'react-slick';
import blogs from "../../data/blogs/blogs.json";

class BlogsSlider extends Component{
    render(){
        /* Slick Slider settings */
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          };

          return(
            <div className="blogsSlider">
                <Slider {...settings}>
                    {/* Read data from JSON using map method */}
                    {blogs.map(blog => (
                        <div key={blog.id} className="card mb-4">
                            <img className="card-top img-fluid p-2" src={blog.image} alt="blogs" />
                            <div className="blog-content">
                            <h4 className='p-4'>{blog.title}</h4><br /><br />
                            <p className='p-2'>{blog.description}</p>
                        </div>
                    </div>
        ))}
            </Slider>
        </div>
        )
    }
}

export default BlogsSlider;