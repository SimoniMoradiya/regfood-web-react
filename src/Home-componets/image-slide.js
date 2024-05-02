import React, { useState } from "react";
import Imagecarousel from "../API/image-slider-api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Imageslider = () => {

    const [images, setImages] = useState(Imagecarousel);

    console.log(setImages);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        className: 'download-img-slider',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
      };

    return(
        <>

            <div className="container-fluid download">
                <div className="row ">
                    <div className="col-12 col-lg-4 download-col-1">
                        <div className="download-text-bg">
                            <div className="download-text-overlay">
                                <div className="download-text">
                                    <h5 className="download-text-sub-info">$5.00 Cashback</h5>
                                    <h2 className="download-text-title">Easy To Order Our All Food</h2>
                                    <ul className="download-list d-flex flex-wap">
                                        <li className=" download-text-icon-box">
                                            <a href="#">
                                                <span className="download-text-icon">
                                                    <i className="fa-brands fa-google-play"></i>
                                                </span>
                                                <p className="download-text-icon-info">
                                                    <span>Available on the</span>
                                                    Google Play
                                                </p>
                                            </a>
                                        </li>

                                        <li className="download-text-icon-box">
                                            <a href="#">
                                                <span className="download-text-icon">
                                                    <i className="fa-brands fa-apple"></i>
                                                </span>
                                                <p className="download-text-icon-info">
                                                    <span>Download on the</span>
                                                    App Store
                                                </p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-8 download-col-2 p-0 ">
                        <div className="row p-0">
                        <Slider {...settings}>
                            {
                                images.map((imagedata) => {

                                    const{ Id, imgsrc} = imagedata;

                                    return(
                                               <div className="col-12 download-imag-col" key={Id} >
                                                    <div className="download-slider">
                                                        <img src={imgsrc} className="img-fluid"></img>
                                                    </div>
                                               </div>
                                    );
                                })
                            }

                            </Slider>
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}

export default Imageslider;