import React from 'react';
import ImageGallery from "react-image-gallery";
/* CSS */
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: "./images/products/api94jl8t__07859.jpg",
        thumbnail: "",
    },
    {
        original: "./images/products/apioqzsbb__09111.jpg",
        thumbnail: "",
    },
    {
        original: "./images/products/api94jl8t__07859.jpg",
        thumbnail: "",
    },
    {
        original: "./images/products/apioqzsbb__09111.jpg",
        thumbnail: "",
    },
    {
        original: "./images/products/api94jl8t__07859.jpg",
        thumbnail: "",
    },
    {
        original: "./images/products/apioqzsbb__09111.jpg",
        thumbnail: "",
    }
]

class ProudctImageSlider extends React.Component{
    render(){
        return <ImageGallery items={images} 
        autoPlay={true}
        showPlayButton={false}
        />
    }
}

export default ProudctImageSlider;