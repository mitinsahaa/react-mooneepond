import React, { Component } from 'react';
import Slider from 'react-slick';
import LatestProducts from '../../data/products/latestProductList.json';
import { Link } from 'react-router-dom';

class LatestArrivalSlider extends Component{
    render(){
        /* Slick Slider settings */
        const settings = {
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 200,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          };

          return(
            <div className="latestProductSlider">
                <Slider ref={this.sliderRef} {...settings}>
                    {/* Read data from JSON using map method */}
                    {LatestProducts.map(product => (
                        <div key={product.id} className="card mb-4 latestProductCard">
                        <Link to="/products" state={{ data:product.name }} className="productLink">    
                            <img className="card-top img-fluid p-2" src={product.image} alt="latestArrival" />
                            <div className="latestProduct-content">
                            <h4 className='p-4'>{product.productName}</h4><hr />
                            <p className='p-2' style={{ textAlign: "left" }}>{product.category}</p>
                            <p className='p-2'>{product.price}</p>
                        </div>
                        </Link>
                    </div>
        ))}
            </Slider>
        </div>
        )
    }
}

export default LatestArrivalSlider;