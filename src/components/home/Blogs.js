import React, { Component } from 'react';
import BlogsSlider from '../slider/BlogsSlider';

class Blogs extends Component{
    render(){
        return(
            <>
            {/* Blogs Section starts here */}
            {/* Blogs Section heading starts here */}
            <section className='blogs'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 heading'>
                            <h2 className='heading text-center p-5'>Blogs</h2>
                        </div>
                    </div>
                </div>
                {/* Blogs Section heading close here */}
                {/* Display Blogs Slick Slider */}
                <div className='blogs-content'>
                    <div className='container'>
                        <BlogsSlider />
                   </div>
                {/* Display Blogs Slick Slider */}
                </div>
            </section>
            </>
        )
    }
}

export default Blogs;