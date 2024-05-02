import React, {useState} from 'react';
import aboutchef from '../images/about_chef.jpg'
import AboutcompanyApi from '../API/about-company-api';

const Aboutcompany = () => {

    const[companyinfo, setCompanyinfo] = useState(AboutcompanyApi);

    console.log(setCompanyinfo);

  return (
    <>
        <div className='container about-company-sec'>
            <div className='row'>
                <div className='col-12 col-md-12 col-lg-6 about-company-col-1'>
                    <div className='about-company-img'>
                        <div className='img'>
                            <img src={aboutchef} className='img-fluid w-100' />
                        </div>
                        <h3 className='about-company-img-heding'>
                            12+ 
                            <span>Years experience</span>
                        </h3>
                        <p className='about-company-img-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis architecto reiciendis.
                            <span>jhon deo</span>
                        </p>
                    </div>
                </div>

                <div className='col-12 col-md-12 col-lg-6 about-company-col-2'>
                    <div className='about-company'>
                        <div className='about-company-hadding'>
                            <h4 className='sub-text daily-sub-text'>About Company</h4>
                            <h2 className='daily-offer-hadding'>Helathy Foods Provider</h2>
                        </div>
                        <div className='about-company-info'>
                            <p className='about-company-text'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur molestiae minima pariatur consequatur voluptate sapiente deleniti soluta,.
                            </p>
                            <div className='row about-company-list'>
                                {
                                    companyinfo.map((companyinfodata)=> {
                                            const{id, iconimg, hedding, text} = companyinfodata;

                                            return(
                                                <>
                                                    <div className='col-12 about-comapny-info-list '>
                                                        <div className='row'>
                                                            <div className='col-12 col-md-1 p-0 col-lg-1 api-img-col-1'>
                                                                <div className='api-img'>
                                                                    <img src={iconimg} className='img-fluid w-100' ></img>
                                                                </div>
                                                            </div> 

                                                            <div className='col-12 col-md-11 col-lg-11 api-img-col-2'>
                                                                <h4 className='company-info-list-title'>{hedding}</h4>
                                                                <p className='company-info-list-text'>{text}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Aboutcompany;
