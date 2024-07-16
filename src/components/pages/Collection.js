import React from "react";
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SellAntiques from "../SellAntiques";
import NewsLetter from "../others/NewsLetter";

const Collection = () => {
        const location = useLocation();
        const { data } = location.state;
        const title = "Antiques Furniture-"+ data;
        return(
            <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            {/* Collections Page starts here */}
            <section className="collections">
                <div className="container">
                    <div className="row">
                        <div className="col-12 heading">
                            <h2 className="heading text-center p-1">{data}</h2>
                            <h6 className="text-center permalinks">Home {`>`} {data} </h6>
                        </div>
                    </div>
                </div>
                <div className="collections-page-content">
                    <div className="collections-page-heading">
                        <h2><strong>{data}</strong></h2>
                    </div>
                </div>
                    <div className="collection-with-sidebar d-flex">
                        <div className="collection-left">
                            <div className="collection-sidebar-heading">
                            <h2 className="sidebar-heading text-center w-100">Categories</h2>
                            </div>
                            <ul className="sidebar-dropdown-menu">
                                <li className="sidebar_dropdown">
                                    <Link to="" className="">View All Of Our Antiques</Link>
                                </li>
                                <hr />
                                <li>
                                    <Link to="">Latest Arrivals</Link>
                                </li>
                                <hr />
                                <li className="sidebar_dropdown">
                                    <Link to="">Items On Sale</Link>
                                </li>
                                <hr />
                                <li>
                                    <Link to="">Antique Furniture</Link>
                                </li>
                                <hr />
                                <li className="sidebar_dropdown">
                                    <Link to="">Art</Link>
                                </li>
                                <hr />
                                <li>
                                    <Link to="">Home Decor</Link>
                                </li>
                            </ul>
                            <div className="collection-sidebar-heading">
                            <h2 className="sidebar-heading text-center w-100">Shop By Price</h2>
                            </div>
                            <div className="price-range d-flex p-4">
                                <span className="field-currency">$</span>
                                <div className="from-input-field">
                                    <input className="price-from" type="number" name="from-price-range" placeholder="From" />
                                </div>
                                <span className="field-currency">$</span>
                                <div className="to-input-field">
                                    <input className="price-to" type="number" name="to-price-range" placeholder="To" />
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="looking-to-sell p-5">
                    <SellAntiques />
                </div>
                <div className="newsLetter">
                    <NewsLetter />
                </div>
            </section>
            </>
        )
    }
    

export default Collection;