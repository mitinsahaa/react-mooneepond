import React, { Component } from 'react';

class footer extends Component{
    render(){
        return(
            <footer>
                <footer className='footer'>
                    <div className='container-fluid'>
                        <div className='row footer-content'>
                            <div className='col-lg-3'>
                                <h4 className='text-uppercase'><strong>Location</strong></h4>
                            <p>
                                    <a href="/#">
                                    49 Hawker St
                                    <br />
                                    Airport West
                                    <br />
                                    Melbourne VIC 3042
                                    <br />
                                    </a>
                                </p>
                                <p>
                                Conveniently located only 8 km from Melbourne Airport 
                                <br />
                                using exit 14 to English street on the Tullamarine Freeway. 
                                <br />
                                </p>
                                <p>
                                And we are just 18 min from the city using the Tullamarine 
                                <br />
                                Freeway and exiting from Essendon Fields exit. 
                                <br />
                                </p>
                                <p>
                                    Email: 
                                    <a href="mailto:admin@mooneepondsantiques.com.au" title="mailto:admin@mooneepondsantiques.com.au">admin@mooneepondsantiques.com.au</a>
                                </p>
                                <p>
                                    Phone:
                                    <a href="tel:0393389627" title="tel:0393389627">(03) 9338 9627</a>
                                </p>
                                <div className='social-icons'>
                                    <i class="fa fa-facebook footer-icon" aria-hidden="true"></i>
                                    <i class="fa fa-pinterest-p footer-icon" aria-hidden="true"></i>
                                    <i class="fa fa-instagram footer-icon" aria-hidden="true"></i>
                                    <i class="fa fa-youtube-play footer-icon" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <h4 className='text-uppercase text-center mx-5'><strong>More Info</strong></h4>
                                <ul className='footer-menu mx-5'>
                                    <li>
                                        <a href="/#">Looking To Sell Items?</a>
                                    </li>
                                    <li>
                                        <a href="/#">Payment Options</a>
                                    </li>
                                    <li>
                                        <a href="/#">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="/#">Lay-by Terms and <span className='text-nowrap'></span> Conditions</a>
                                    </li>
                                    <li>
                                        <a href="/#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/#">Tutorial Videos</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-3'>
                                <h4 className='text-uppercase text-center'><strong>About Us</strong></h4>
                                <ul className='footer-menu mx-5'>
                                    <li>
                                        <a href="/#">About</a>
                                    </li>
                                    <li>
                                        <a href="/#">Antique Delivery Australia Wide</a>
                                    </li>
                                    <li>
                                        <a href="/#">Blogs</a>
                                    </li>
                                    <li>
                                        <a href="/#">Contact</a>
                                    </li>
                                    <li>
                                        <a href="/#">FAQs</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-3'>
                                <h4 className='text-uppercase'><strong>Service Areas</strong></h4>
                                <ul className='footer-menu'>
                                    <li>
                                        <a href="/#">Adelaide</a>
                                    </li>
                                    <li>
                                        <a href="/#">Brisbane</a>
                                    </li>
                                    <li>
                                        <a href="/#">Canberra</a>
                                    </li>
                                    <li>
                                        <a href="/#">Hobart</a>
                                    </li>
                                    <li>
                                        <a href="/#">Melbourne</a>
                                    </li>
                                    <li>
                                        <a href="/#">Perth</a>
                                    </li>
                                    <li>
                                        <a href="/#">Sydney</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid footer-copyright'>
                        <div className='row text-center text-white'>
                            <div className='col-12'>
                                <p>
                                Copyright © 2024 Moonee Ponds Antiques | All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </footer>
        )
    }
}

export default footer;