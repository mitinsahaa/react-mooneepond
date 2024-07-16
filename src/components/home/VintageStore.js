import React, { Component } from "react";

class VintageStore extends Component{
    render(){
        return(
            <>
            {/* Moonee Ponds French Vintage Section starts here */}
            {/* Moonee Ponds French Vintage heading starts here */}
            <section className="VintageStore">
                <div className="container">
                    <div className="row">
                        <div className="col-12 heading">
                            <h2 className='heading text-center vintage-heading-1' style={{ textDecoration: "none" }}>Moonee Ponds Antiques</h2>
                            <hr className="heading-horizontal-line"/>
                            <h2 className='heading text-center vintage-heading-2' style={{ textDecoration: "none" }}>Antique French Interior & Vintage Stores</h2>
                        </div>
                    </div>
                </div>
                {/* Moonee Ponds French Vintage heading ends here */}

                {/* Moonee Ponds French Vintage Content starts here*/}
                <div className="vintageStore-products">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 vintageStore-content">
                                <p className="text-center">Moonee Ponds Antiques is a well-established antique business based in Melbourne.<br /> </p> 
                                <p className="text-center">We are a family-owned business with over 30 years’ experience buying and selling Australian, French and English Antiques in Melbourne, Perth, Sydney, Brisbane, and other parts of Australia. <br /></p>
                                <p className="text-center">We pride ourselves on our personalised customer service, wide quality range of stock and great value for money.  <br /></p>
                                <p className="text-center">Interstate buyers are most welcome! We have several reliable and cost-effective carriers that we work with to organise Australia wide deliveries right to your doorstep.</p><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Moonee Ponds French Vintage Content ends here*/}
            </section>
            </>
        )
    }
}

export default VintageStore;