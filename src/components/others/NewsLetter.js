import React, { Component } from 'react';

class NewsLetter extends Component{
    render(){
        return(
            <>
            {/* Join Mailing List Starts here */}
            <section>
                <div className='newsLetter'>
                    <div className='newsLetterHeading pt-5'>
                        <h2 className='text-center'>Join our Mailing List</h2>
                    </div>
                    <div className='newsLetterPara'>
                        <p className='text-center'>to be the first to know about new items, special offers and more...</p>
                    </div>
                    <div className='newsLetterinputBox'>
                        <div className='col-lg-4 textBox'>
                            <input type='text' className='form-control' placeholder='Email'></input>
                        </div>
                    </div>
                    <div className='newsLetterSubscribe'>
                        <button className="transparent-btn">Subscribe</button>
                    </div>
                </div>
            </section>
            {/* Join Mailing List Ends here */}
            </>
        )
    }
}

export default NewsLetter;