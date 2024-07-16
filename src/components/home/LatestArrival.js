import React, { Component } from 'react';
import LatestArrivalSlider from '../slider/LatestArrivalSlider';

class LatestArrival extends Component{
    render(){
        return(
            <>
            {/* Latest Arrival Section starts here */}
            {/* Latest Arrival Section heading starts here */}
            <section className='lattestArrival'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 heading'>
                            <h2 className='heading text-center p-5'>Latest Arrivals</h2>
                        </div>
                    </div>
                </div>
                {/* Latest Arrival Section heading close here */}
                {/* Display Latest Arrival Products starts here */}
                <div className='latestArrival-products'>
                    <div className='container-fluid'>
                        <LatestArrivalSlider />
                    </div>
                </div>
                    {/* Display Latest Arrival Products ends here */}
                    {/* View all button to check all products */}
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='center-btn view-all-button mt-4'>
                                    <button type="button" class="btn btn-outline-dark btn-lg">View all</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            {/* Latest Arrival Section ends here */}
            <br />
            </>
        )
    }
}

export default LatestArrival;