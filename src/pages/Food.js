import React from 'react';
import Aboutherosection from '../About-componets/hero';
import '../css/food.css';
import Product from '../food-componets/product';

const Food = () => {

    
    const data = {
        title: "Our Food",
    }

  return (
    <>

        <Aboutherosection {...data}/>
        <div className='container-fulid food-main-container '>
            <div className='container food-category-container '>
                <div className='row'>
                    <div className='col-12'>
                        <ul className='food-list'>
                            <li className='food-list-item'>
                                All
                            </li>
                            <li className='food-list-item'>
                                Appetizers/Starters
                            </li>
                            <li className='food-list-item'>
                                Breakfast
                            </li>
                            <li className='food-list-item'>
                                Main Menu (Lunch/Dinner)
                            </li>
                            <li className='food-list-item'>
                                Dessert
                            </li>
                            <li className='food-list-item'>
                                Beverage
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='container product-container'>
                <div className='row'>
                    <div className='col-12 col-lg-3 col-md-6 product-item'>
                        <Product />   
                    </div>
                    <div className='col-12 col-lg-3 col-md-6 product-item'>
                        <Product /> 
                    </div>
                    <div className='col-12 col-lg-3 col-md-6 product-item'>
                        <Product />  
                    </div>
                    <div className='col-12 col-lg-3 col-md-6 product-item'>
                        <Product />   
                    </div>
                        
                </div>
                
            </div>
        </div>

        
       

    </>
  )
}

export default Food;
