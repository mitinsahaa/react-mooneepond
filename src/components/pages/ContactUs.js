import React from 'react';
import { Helmet } from 'react-helmet';
import NewsLetter from '../../components/others/NewsLetter';
import { Link } from 'react-router-dom';

const ContactUs = () =>{
    /* Page Title */
    const title = "Contact For Antique Shops Online";
    return(
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
        </Helmet>
        {/* Contact Us Page starts here */}
        <section className="contactUs">
                <div className="container">
                    <div className="row">
                        <div className="col-12 heading">
                            <h2 className="heading text-center p-1">Contact & Opening Hours</h2>
                            <h6 className="text-center permalinks">Home {`>`} Contact & Opening Hours </h6>
                        </div>
                    </div>
                </div>
                <div className='contactTemplate'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='contact-heading mt-5'>
                                        <h2><strong>Please do get in Touch!</strong></h2>
                                    </div>
                                    <p>We'd love to hear from you - please use the online form to send us your enquiry. To talk to us today:</p>
                                    <div className='contact-block'>
                                        <div className='contact-item d-flex'>
                                            <p>
                                            <i className="fa fa-phone p-2" aria-hidden="true"></i>
                                            <Link className='contact-text' to="tel:0393389627">(03) 9338 9627</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='contact-block'>
                                        <div className='contact-item d-flex'>
                                            <p>
                                            <i class="fa fa-location-arrow p-2" aria-hidden="true"></i>
                                            <Link className='contact-text' to="tel:0393389627">49 Hawker St Airport West Melbourne VIC 3042</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='contact-block'>
                                        <div className='contact-item d-flex'>
                                            <p>
                                            <i class="fa fa-envelope-o p-2" aria-hidden="true"></i>
                                            <Link className='contact-text' to="tel:0393389627">admin@mooneepondsantiques.com.au</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='contact-heading mt-5'>
                                        <h2><strong>OPENING HOURS:</strong></h2>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <ul className="opening-hours-timings">
                                                <li>
                                                    <strong>Mon: </strong>
                                                    11:00 am - 3:00 pm
                                                </li>
                                                <li>
                                                    <strong>Tue: </strong>
                                                    11:00 am - 3:00 pm
                                                </li>
                                                <li>
                                                    <strong>Wed: </strong>
                                                    11:00 am - 3:00 pm
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='col-lg-6'>
                                            <ul className="opening-hours-timings">
                                                <li>
                                                    <strong>Thus: </strong>
                                                    11:00 am - 3:00 pm
                                                </li>
                                                <li>
                                                    <strong>Fri: </strong>
                                                    11:00 am - 3:00 pm
                                                </li>
                                                <li>
                                                    <strong>Sat: </strong>
                                                    11:00 am - 3:00 pm
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <ul style={{ backgroundColor: "#fff", color: "#000"}}>
                                                <li style={{ listStyleType: "none" }}><strong class="p-2">Sunday :</strong>
                                                  By appointment only
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='col-lg-6'>
                                            <ul style={{ backgroundColor: "#fff", color: "#000"}}>
                                                <li style={{ listStyleType: "none" }}><strong class="p-2">Public Holiday :</strong>
                                                  Closed
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='contact-heading mt-5'>
                                        <h2><strong>2024 Winter Holiday Closure</strong></h2>
                                        <p>Our Airport West showroom will be closed from the 1st of July until the 5th of July. We will be reopening Saturday the 6th of January at 11am. Please email us with any enquires as we are still monitoring our emails. </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className='contact-form'>
                                        <h2 className='contact=form-heading'>Contact Us</h2>
                                    <p className='w-75 mx-5'>We're happy to answer questions or help you with returns. Please fill out the form below if you need assistance.</p>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className="col-lg-6">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Name</label>
                                                            <input type="text" className='form-control' placeholder="Name"></input>
                                                        </div>
                                                        <div className='form-group'>
                                                            <label>Phone Number</label>
                                                            <input type="text" className='form-control' placeholder="Phone Number"></input>
                                                        </div>
                                                        <div className='form-group'>
                                                            <label>Email</label>
                                                            <input type="text" className='form-control' placeholder="Email *"></input>
                                                        </div>
                                                        <div className='form-group'>
                                                            <label>Order Number</label>
                                                            <input type="text" className='form-control' placeholder="Order Number"></input>
                                                        </div>
                                                        <div className='form-group'>
                                                            <label>Comments</label>
                                                            <textarea name='Comment' placeholder='Comment'/>
                                                        </div>
                                                        <button className='btn btn-dark'>Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <NewsLetter />
        </section>
        </>
    )
}

export default ContactUs;