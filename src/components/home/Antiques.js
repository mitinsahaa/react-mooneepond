import React, { Component } from 'react';

class Antiques extends Component{
    render(){
        return (
          <>
            <section className='antiques'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 heading'>
                            <h2 className='heading text-center p-5'>French & English Antiques</h2>
                        </div>
                        <div className='col-12 second-heading'>
                            <h2 className='heading text-center'>Moonee Ponds Antiques</h2> <br />
                            <h2 className='heading text-center'>YOUR ONE-STOP-STORE FOR ANTIQUES IN MELBOURNE</h2>
                        </div>
                    </div>
                </div>
                {/* French & English Antiques Content starts here  */ }
                <div className='antiques-content'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <p>Considered to be one of the leading <strong>antique stores in Melbourne</strong>, delivering antiques in Melbourne, Sydney. Perth and all other parts of Australia, Moonee Ponds Antiques has an extensive collection of French antiques that can impress you.<br /><br />

If you are looking to make a few wonderful additions to your home or office – you should definitely take a look at the antique collection in our vintage shops in Melbourne.</p><br />
                                <p>All our antiques are:</p>
                                <ul className='antiques-list-content'>
                                    <li>Authentic</li>
                                    <p>One important reason why we are the most prominent and reliable antique shops in Melbourne is that you will always find high quality authentic products that have been sourced either from France or locally. Be it clocks, furniture, mirror or art deco - each and everything is original and organic.</p>
                                    <li>Elegant</li>
                                    <p>Our collection of different antique products is sure to grace your place with luxury and elegance. Be it French, Victorian, Edwardian or any other style of antiques in Melbourne – we have them all. Every antique item has its own charm that can instantly increase the beauty of your property.</p>
                                    <li>Reasonable</li>
                                    <p>Our team of antique dealers in Melbourne provides you with original <strong style={{color: "brown"}}>antique furniture</strong> that is sure to cost you less than the price of making new furniture that looks antique.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* French & English Antiques Content ends here  */ }
                {/* Read More button starts here */}
                <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <div className='read-more pb-5'>
                                    <button type="button" class="btn btn-outline-dark btn-lg">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* Read More button ends here */}
            </section>
          </>  
        )
    }
}

export default Antiques;