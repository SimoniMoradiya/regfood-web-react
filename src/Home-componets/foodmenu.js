import React, { Component, useState } from 'react';
import FoodMenu from '../API/food-menu-api';


const Foodmenu = () => {

    const [foodmenu, setFoodmenu] = useState(FoodMenu);

    console.log(foodmenu);

    return (
      <>
        <div className='container-fluid food-menu'>
            <div className='container food-menu-sec'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <h4 className='sub-text daily-sub-text'>food Menu</h4>
                        <h2 className='daily-offer-hadding'>Popular Delicious Foods</h2>
                    </div>
                    <div className='col-12 col-lg-6 col-md-6 pt-4 food-btn'>
                        <button type="button" className="btn apply-btn ">view All</button>
                    </div>
                </div>
            </div>
            <div className='container '>
                <div className='row grid'>

                    {
                        foodmenu.map((fooddata) => {
                            

                            return(
                            
                                <div className='col-12 col-md-6 col-lg-3 menu-item-box' key={fooddata.foodId}>
                                    <div className='menu-item'>
                                        <div className='menu-item-img'>
                                            <img src={fooddata.src} className='img-fluid'></img>
                                        </div>
                                        <div className='menu-item-text'>
                                            <h3 className='offer-item-hadding m-0 pb-2 menu-item-hedding'>{fooddata.title}</h3>
                                            <p className='offer-item-pg menu-item-pg'>{fooddata.info}</p>
                                            <a href='#' className='menu-item-btn'>{fooddata.btn}</a>
                                            <span className='menu-item-price'>{fooddata.price}</span>
                                        </div>
                                    </div>
                        
                                </div>
                            
                            );
                            
                        })
                    }

                    
                </div>
            </div>
            <div className='container menu-btn'>
                <div className='row'>
                    <div className='col-12'>
                    <button type="button" className="btn apply-btn ">view All</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }


export default Foodmenu;
