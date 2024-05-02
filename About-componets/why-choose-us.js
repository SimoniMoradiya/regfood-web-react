import React from 'react';
import bgimg from '../images/why_choose_img.jpg'

const ChooseUs = () => {
  return (
    <>
      <div className='container choose-sec'>
        <div className='row'>
            <div className='col-12 col-md-12 col-lg-8'>
                    <div className='about-company-hadding'>
                        <h4 className='sub-text daily-sub-text'>Why choose us</h4>
                        <h2 className='daily-offer-hadding'>Why We Are The Best</h2>
                    </div>
                    <div className='about-company-info'>
                            <p className='about-company-text'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur molestiae minima pariatur consequatur voluptate sapiente deleniti soluta,.
                            </p>

                            <div className='row'>
                                
                            </div>

                    </div>
            </div>

            <div className='col-12 col-md-12 col-lg-4'>
                <div className='about-choose-img'>
                    <img src={bgimg} className='img-fluid w-100'></img>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ChooseUs;
