import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import Carousel from './components/home/CarouselBannerSlider';
import LatestArrival from './components/home/LatestArrival';
import ProductCategory from './components/home/ProductCategory';
import VintageStore from './components/home/VintageStore';
import Antiques from './components/home/Antiques';
import FeedbackByClient from "./components/home/FeedbackByClient";
import Blogs from './components/home/Blogs';
import NewsLetter from "./components/others/NewsLetter";
import SellAntiques from "./components/SellAntiques";

class Home extends Component{
    render(){
        const title = "French Antique Shop Melbourne | Antique Dealers | Vintage Stores – Moonee Ponds Antiques";
        return( 
            <>            
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <Carousel />
            <LatestArrival />
            <ProductCategory />
            <VintageStore />
            <SellAntiques />
            <Antiques />
            <FeedbackByClient />
            <Blogs />
            <NewsLetter />
            </>
        )
    }
}

export default Home;