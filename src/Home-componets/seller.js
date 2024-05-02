import React, {useState} from "react";
import SellApi from "../API/seller-offer-api";

const SellOfer = () => {

    const [sellerdata, setSellerdata] = useState(SellApi);

    console.log(setSellerdata);

    return(
        <>

            <div className="container seller-container">
                <div className="row">


                    {
                        sellerdata.map((seller) => {

                            const{id,subtitle,title,info,btn} = seller;

                            return(
                                
                                    <div className="col-12 col-lg-6 seller-col" key={id}>
                                        <div className="seller-item">
                                            <div className="seller-text">
                                                <h5 className="seller-sub-title">{subtitle}</h5>
                                                <h2 className="seller-title">{title}</h2>
                                                <p className="seller-info">{info}</p>
                                                <a className="seller-btn">{btn}<i className="fa-solid fa-arrow-right-long"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                
                            );
                        })
                    }

                    

                </div>
            </div>

        </>
    );

}

export default SellOfer;