import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ProductImageSlider from '../slider/ProductImageSlider';
import QuantitySelector from '../others/QuantitySelector';
import NewsLetter from '../others/NewsLetter';
import ShopCollections from '../others/ShopCollections';
//import { useLocation } from 'react-router-dom';

const Product = () => {
    /*const location = useLocation();*/
    const title = "Product Name";

    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleQuantityChange = (newQuantity) => {
        setSelectedQuantity(newQuantity);
    };
        return(
            /* Page Title */
            <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
                {/* Product Page starts here */}
                <section className='product-page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 heading'>
                            <h2 className='heading text-center p-2'>Shop</h2>
                            <h6 className="text-center permalinks">Home {`>`} Product </h6>
                        </div>
                    </div>
                </div>

                {/* Product Page Content */}
                {/* Product Details with Image Slider starts here */}
                <div className='product-content'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='image-slider'>
                                        <ProductImageSlider />
                                    </div>
                                    <div className='pickup-availability-info'>
                                        <p className='caption-large'>
                                        <i class="fa fa-check" aria-hidden="true"></i>
                                           <strong style={{ fontFamily: "trump mediaeval" }}>Pickup Available at</strong>
                                            <span className='text-secondary'> 49 Hawker St</span>
                                        </p>
                                    </div>
                                        <p className='caption text-secondary'>Usually ready in 24 hours</p>
                                        <p className='caption text-secondary' style={{ textDecoration: "underline" }}>View Store information</p>

                                        <br /><br /><br />

                                        <div className='shipping_card'>
                                            <img src='./images/easy-cart-img.jpg' alt="easy-cart" />
                                            <span className='mx-4'>Shop Easy & Secure</span>
                                            <img src='./images/aus-img.jpg' alt="aus-img" />
                                            <span className='mx-4'>Australia-Wide Delivery</span>
                                        </div>
                                        
                                        <br /><br /><br /><br /><br />

                                        <div className='social-icons'>
                                            <div className='share-buttons'>
                                            <a href="#" className="facebook" target="_blank"><i className='fa fa-facebook'></i> Share </a>
                                            <a href="#" className="twitter" target="_blank"><i className="fa fa-xing-square" aria-hidden="true"></i> Twitter</a>
                                            <a href="#" className="email" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i> Email</a>
                                            <a href="#" className="messenger" target="_blank"><i class="fa fa-comments" aria-hidden="true"></i> Share</a>
                                            <a href="#" className="whatsapp" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                </div>
                                <div className='col-lg-6'>
                                    <h1 className='product-title'>French Oak Farmhouse Table</h1>
                                    <div className='product-price-detail'>
                                    <h2>$3, 250</h2>
                                    <span className='text-secondary'>Tax Included.</span>
                                    <p>
                                        <span>SKU: </span>
                                        <span>YY383</span>
                                    </p>
                                    <p>
                                        <span>Height: </span>
                                        <span>77 cm</span>
                                    </p>
                                    <p>
                                        <span>Length: </span>
                                        <span>220 cm</span>
                                    </p>
                                    <p>
                                        <span>Depth: </span>
                                        <span>78.5 cm</span>
                                    </p>
                                    </div>
                                    <hr className='product-horizontal-line'/>
                                    <div className='product-description'>
                                        <p className='w-50'>Stunning French oak refectory farmhouse table, it is in good restored condition. It can seat 6-8 people comfortably. Please see photos as they form part of the description. </p>
                                        <h3>
                                            <strong>Australia Wide Delivery</strong>
                                        </h3>
                                        <p className='w-50'>
                                        We can arrange delivery to: Melbourne, Hobart, Launceston, Sydney, Adelaide, Perth, Canberra, Brisbane, and regional centres. Add this item to your cart and we will get back to you with a shipping quotation. Requesting a quote will place a 24 hour hold on the item to ensure you don't miss out while awaiting a delivery quote.
                                        </p>
                                    </div>
                                    <div className='product-quantity'>
                                        <label>Quantity</label>
                                        <QuantitySelector onChange={handleQuantityChange} />
                                    </div><br />
                                    <div className='btn btn-lg btn-dark' style={{ fontFamily:"trump mediaeval", fontWeight:"700" }}>Add To Cart</div>
                                    <div className='btn btn-lg btn-secondary mx-5'>Ask Our Friendly Staff</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='shop-collections'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 heading'>
                                        <h2 className='heading text-center p-5'>Shop the Collections</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='shop-collections-content'>
                                <div className='container-fluid'>
                                    <ShopCollections />
                                </div>
                            </div>
                        </div>
                <NewsLetter />
            </section>
            </>
        )
    }

export default Product;