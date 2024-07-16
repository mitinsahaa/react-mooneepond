import React, { Component } from 'react';

class CarouselBannerrSlider extends Component {

    render(){
        return(
            <>
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="800">
                            <img className="d-block w-100 slide-img-1" src="./images/carousel-images/img-1.jpg" alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="container">
                                        <div className="sliderContent">
                                            <h2>Beautiful Range</h2>
                                            <h1>Of Antiques</h1>
                                            <p>30 years experience of buying and selling antiques</p>
                                            <div className='content-shop-now'>
                                                <p><span> | </span>SHOP NOW</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item carousel-slide-2">
                            <img className="d-block w-100 slider-img-2" src="./images/carousel-images/img-2.jpg" alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="container">
                                        <div className="sliderContent">
                                            <h2>Shop Online</h2>
                                            <p>Check out our contact us page and ask for a delivery quote today</p>
                                            <div className='content-shop-now'>
                                            <p><span> | </span>Contact Now</p>
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
}

export default CarouselBannerrSlider;