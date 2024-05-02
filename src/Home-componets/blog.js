import React, {useState} from "react";
import BolgApi from "../API/blog-api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BlogPost = () => {

    const [blogdata, setBlogdata] = useState(BolgApi);

    console.log(setBlogdata);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows :true,
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
        }]
      };

    return (
        <>

            <div className="container-fluid blog-bg">
                <div className="container team-hadding-container ">
                    <div className="row">
                        <div className="col-12">
                            <h4 className='sub-text daily-sub-text'>news & blogs</h4>
                            <h2 className='daily-offer-hadding'>Our Latest Foods Blog</h2>
                        </div>
                    </div>
                </div>

                <div className="container blog-container">
                    <div className="row">

                    <Slider {...settings}>

                        {
                            blogdata.map((postdata) => {
                                    const{blogid, blogimg, clientimg, clientname,postdate,category,posttitle,postinfo,btn,Comment} = postdata;

                                    return(
                                        
                                            <div className="col-12 col-lg-12 p-0" key={blogid}>
                                                <div className="single-blog" >
                                                    <div className="blog-img">
                                                        <img src={blogimg} className="img-fluid w-100"></img>
                                                    </div>

                                                    <div className="blog-author">
                                                            <div className="author-img">
                                                                <img src={clientimg} className="img-fluid w-100"></img>
                                                            </div>
                                                            <div className="author-text">
                                                                <h5 className="author-name">{clientname}</h5>
                                                                <p className="post-date">{postdate}</p>
                                                            </div>   
                                                        </div>
                                                    <div className="single-blog-text">
                                                        <div className="blog-info">
                                                                <a href="#" className="blog-category">{category}</a>
                                                                <a href="#" className="post-title">{posttitle}</a>
                                                                <p className="post-info">{postinfo}</p>
                                                            </div>
                                                        <div className="blog-footer">
                                                                <a href="#" className="post-btn">{btn}<i className="fa-solid fa-arrow-right-long"></i></a>
                                                                <span className="comments"><i className="fa-regular fa-comments"></i>{Comment}</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        
                                    );
                            } )
                        }

                    </Slider>

                    </div>
                </div>

            </div>

        </>
    );

}

export default BlogPost;