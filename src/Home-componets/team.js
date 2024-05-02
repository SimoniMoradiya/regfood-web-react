import React, { useState } from "react";
import Team from '../API/team-api';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Ourteam = () => {

    const [ourteam, setOurteam] = useState(Team);

    console.log(ourteam);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    
    ]
        
      };

    return(
        <>

            <div className="container-fluid team-bg">
                <div className="container team-hadding-container ">
                    <div className="row">
                        <div className="col-12">
                            <h4 className='sub-text daily-sub-text'>our team</h4>
                            <h2 className='daily-offer-hadding'>Meet our expert chefs</h2>
                        </div>
                    </div>
                </div>

                <div className="container team-container">
                    <div className="row">

                    <Slider {...settings}>
                        {
                            ourteam.map((teamdata) => {

                                const{id,cfimg,name,post,fbicon,inicon,twicon,yuicon} = teamdata;

                                return(
                                    
                                        <div className="col-12 col-lg-12 p-0" key={id}>
                                            <div className="team-item">
                                                <div className="team-item-img">
                                                    <img src={cfimg} className="img-fluid w-100"></img>
                                                </div>
                                                <div className="team-item-text">
                                                    <h4 className="team-name">{name}</h4>
                                                    <p className="team-post">{post}</p>
                                                    <ul className="d-flex flex-wrap">
                                                        <li><i className={`fontawesome-style ${fbicon}`}></i></li>
                                                        <li><i className={`fontawesome-style ${inicon}`}></i></li>
                                                        <li><i className={`fontawesome-style ${twicon}`}></i></li>
                                                        <li><i className={`fontawesome-style ${yuicon}`}></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    
                                );
                            })
                        }

                    </Slider> 
                    </div>
                </div>
            </div>

        </>
    );
}

export default Ourteam;