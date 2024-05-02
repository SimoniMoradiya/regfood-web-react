import React, { useState } from 'react';
import dailyofferapi from '../API/daily-offer-api';

const Dailyoffer = () => {

    const [dailyoffer, setDailyoffer] = useState(dailyofferapi);

    console.log(setDailyoffer);

  return (
    <>
        <div className='container-fluid daily-offer-bg'>
            <div className='container daily-offer-sec'>
            <h4 className='sub-text daily-sub-text'>daily offer</h4>
            <h2 className='daily-offer-hadding'>up to 75% off for this day</h2>
            <div className='row'>

                    {
                        dailyoffer.map((curElem) => {

                            const { offerId, subinfo,title,info,btn} = curElem;

                            return(
                            
                                <div  className='col-12 col-lg-4 p-0 offer-item-box' key={offerId}>
                                    <div className='offer_item_single'>
                                        <span className='offer-item-span' >{subinfo}</span>
                                        <h2 className='offer-item-hadding' >{title}</h2>
                                        <p className='offer-item-pg' >{info}</p>
                                        <a href='#' className='offer-item-btn'>{btn}</a>
                                    </div>
                                </div>
                            
                         );
                         })}

               
            </div>
            </div>
      </div>
    </>
  );
}

export default Dailyoffer;
