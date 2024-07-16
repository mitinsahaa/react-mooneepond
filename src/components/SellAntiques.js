import React, { Component } from 'react';

class SellAntiques extends Component{
    render(){
        return(
            <>
                <section className='antiquesSell'>
                    {/* Looking to Sell Antiques containing image Starts here */}
                <div className="container vintage-img-container">
                    <div className="row">
                        <div className="vintage-image-content p-5">
                            <h2>Looking To Sell <br /> Antiques?</h2>
                            <hr />
                            <p>We specialize in purchasing a range of antiques from the 
                            public through deceased estates, house downsizing and 
                            relocations. 
                            We purchase antique furniture, collectables, art and more..
                            Please email through photos of the items at
                            <b> admin@mooneepondsantiques.com.au.</b> We endeavor to respond to your emails in a timely a manner. 
                            Please note we are not able to accept walk ins to sell goods at this time.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Looking to Sell Antiques containing image ends here */}
                </section>
            </>
        )
    }
}

export default SellAntiques;