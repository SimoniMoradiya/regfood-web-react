import React from 'react';
import beefburgers  from '../images/p-a-1.jpg';
import Rating from '@mui/material/Rating';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: '#ff7c08',
        boxShadow: theme.shadows[1],
    fontSize: 11,
    },
  }));


const Product = () => {

  return (
    <>
        <div className='product-box'>
            <div className='product-img'>
                <img src={beefburgers} className='img-fluid'/>
                <div className='overlay'>
                    <ul className='product-img-icon'>
                    <BootstrapTooltip title="Whish List" placement="top" className='product-tooltip'>
                        <li> <i className="fa-regular fa-heart"></i></li>
                    </BootstrapTooltip>
                    <BootstrapTooltip title="Quick View" placement="top" className='product-tooltip'>
                        <li> <i className="fa-regular fa-eye"></i></li>
                    </BootstrapTooltip>
                       
                    </ul>
                </div>
            </div>       
            <div className='product-info'>
                <div className='product-name'>Beef & Vegetable Burgers</div>
                <div className='product-rating'>
                    <Rating name="read-only" value={4} readOnly /> 
                </div>
                <div className='product-dec'>
                    A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other... 
                </div>
                <NavLink to="#" className='product-add-cart'>Add to Cart <i className="fa-solid fa-cart-shopping"></i></NavLink>
                <span class="product-item-price">$80.00</span>
            </div>
        </div>
    </>
  )
}

export default Product;
