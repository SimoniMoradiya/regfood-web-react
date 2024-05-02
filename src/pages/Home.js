import React from 'react';
import Herosection from '../Home-componets/herosection.js';
import BookData from '../Home-componets/Data.json';
import Dailyoffer from '../Home-componets/daily-offer.js';
import FoodMenu from '../Home-componets/foodmenu.js';
import Ourteam from '../Home-componets/team.js';
import Bookform from '../Home-componets/bookform.js';
import Conternumber from '../Home-componets/counter.js';
import SellOfer from '../Home-componets/seller.js';
import Imageslider from '../Home-componets/image-slide.js';
import BlogPost from '../Home-componets/blog.js';

const Homepage = () => {

    return(

        <>
            <Herosection myplaceholder ="Search . . . ." data={BookData}/>
            <Dailyoffer />
            <FoodMenu />
            <Ourteam />
            <Bookform />
            <Conternumber />
            <SellOfer />
            <Imageslider/>
            <BlogPost/>

        </>

    );

}

export default Homepage;