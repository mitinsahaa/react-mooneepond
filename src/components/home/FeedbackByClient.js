import React, { Component } from 'react';
import ClientFeedbackSlider from '../slider/ClientFeedbackSlider';

export default class FeedbackByClient extends Component{
    render(){
        return(
         <>
        {/* Clients Say Feedback */}
            <section className='whatClientSay'>
                <div className='container'>
                    <div className='col-12 heading'>
                        <h2 className='text-center p-5'>What Our Clients Say</h2>
                    </div>
                    
                    <div className='clientSayContent'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12 clientFeedback'>
                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                                <ClientFeedbackSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        )
    }
}