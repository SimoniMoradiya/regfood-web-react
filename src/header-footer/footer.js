import React from "react";
import footerlogo from '../images/footer_logo.png';

const Footer = () => {

return(
    <>
        <div className="container-fluid footer-bg">
            <div className="footer-overly">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4 footer-col">
                            <div className="footer-content footer-col-1">
                                <div className="footer-logo">
                                    <img src={footerlogo} className="img-fluid w-100"></img>
                                </div> 
                                <span className="footer-info-pg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.
                                </span>  
                                <ul className="footer-social d-flex flex-wrap">
                                    <li><i className="fa-brands fa-facebook-f"></i></li>
                                    <li><i className="fa-brands fa-instagram"></i></li>
                                    <li><i className="fa-brands fa-linkedin-in"></i></li>
                                    <li><i className="fa-brands fa-google"></i></li>
                                    <li><i className="fa-brands fa-twitter"></i></li>
                                    <li><i className="fa-brands fa-behance"></i></li>
                                </ul> 
                            </div>
                        </div>

                        <div className="col-12  col-md-6 col-lg-2">
                            <div className="footer-content footer-col-2">
                                <h3 className="footer-title">Short Link</h3>
                                <ul className="footer-link">
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>Our Service</li>
                                    <li>gallery</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="footer-content footer-col-3">
                                <h3 className="footer-title">Help Link</h3>
                                <ul className="footer-link">
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                    <li>Refund Policy</li>
                                    <li>FAQ</li>
                                    <li>contact</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3 footer-col">
                        <div className="footer-content footer-col-4 ">
                                <h3 className="footer-title">contact us</h3>
                                <p className="footer-con-info">
                                    <i className="fa-solid fa-phone"></i>
                                    +44 (0) 20 9994 7740
                                </p>
                                <p className="footer-con-info">
                                    <i className="fa-solid fa-envelope"></i>
                                    themefaxbd@gmail.com
                                </p>
                                <p className="footer-con-info">
                                    <i className="fa-solid fa-location-dot"></i>
                                    Blackwell Street,Dry Creek,Alaska
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid second-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-bottom-text">
                            <p>Copyright © <b> RegFood</b> 2023. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

}

export default Footer;