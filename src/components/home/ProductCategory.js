import React, { Component } from 'react';
import products from '../../data/products/productsList.json';
import { Link } from 'react-router-dom';

class ProductCategory extends Component{
    render(){
        const scrollToTop = () => {
            window.scrollTo(0, 0)
        }
        return(
            <>
            {/* Product Category Section starts here */}
            {/* Product Category Section heading starts here */}
            <section className='productCategory'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 heading'>
                            <h2 className='heading text-center p-5'>Product Category</h2>
                        </div>
                    </div>
                </div>
                {/* Product Category Section heading close here */}
                {/* Display Products starts here */}
                <div className='productCategories'>
                    <div className='container'>
                        <div className='row'>
                            {products.map(product => (
                                <div className='col-lg-3'>
                                <div className='card product-card' key={product.id}>
                                <Link onClick={scrollToTop} to="/collections" state={{ data:product.name }} className="productLink"><img className='img-fluid' src={product.image} alt={ product.imageAlt }></img>
                                    <p className='text-center category-product-name'><h5>{ product.name }</h5></p></Link>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Display Product Category ends here */}
                {/* View all button to check all products */}
                <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <div className='center-btn view-all-button mt-4'>
                                    <button type="button" class="btn btn-outline-dark btn-lg">View all</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            {/* Product Category Section ends here */}
            </>
        )
    }
}

export default ProductCategory;