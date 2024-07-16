import React, { Component } from 'react';
import Slider from 'react-slick';
import clients from '../../data/whatsClientSay/clientSay.json';

class ClientFeedbackSlider extends Component{
    render(){
        /* Slick Slider settings */
        const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
          };

          return(
            <div className='clientSlider'>
                <Slider {...settings}>
                  {clients.map(client => (
                  <div key={client.id} className='mt-5'>
                  <p className='text-center'>{client.title}</p>
                  <hr className='feedbackLine' />
                  <p className='text-center'>{client.author}</p>
                  </div>
                ))}
                </Slider>
            </div>
          )
        }
    }

export default ClientFeedbackSlider;