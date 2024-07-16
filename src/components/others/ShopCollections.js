import React, { Component } from 'react';
import Slider from 'react-slick';
import collections from "../../data/products/productsList.json";

class ShopCollections extends Component{
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
            <>
            <div className="shopCollectiSlider">
                <Slider {...settings}>
                    {/* Read data from JSON using map method */}
                    {collections.map(collectProduct => (
                        <div key={collectProduct.id} className="card mb-4">
                            <img className="card-top img-fluid p-2" src={collectProduct.image} alt="blogs" />
                            <div className="shopCollection-slider">
                            {/*<h4 className='p-4'>{collectProduct.title}</h4><br /><br />*/}
                            {/*<p className='p-2'>{collectProduct.description}</p>*/}
                            <h4>Product</h4>
                            <hr />
                            <p>
                                <button className="transparent-btn">View all</button>
                            </p>
                        </div>
                    </div>
        ))}
            </Slider>
        </div>
            </>
        )
    }
}

export default ShopCollections;