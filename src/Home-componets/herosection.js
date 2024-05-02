import React, { useState} from 'react';
import heroimg2 from '../images/hero-b-2.png';
import serchicon from '../images/sr.png';
import closeicon from '../images/cl.png';


function Herosection({ myplaceholder, data})  {

  const [filteredData, setFilteredDate] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    });

    if(searchWord === ""){
      setFilteredDate([]);
    }else{
      setFilteredDate(newFilter);
    }

  };

    return (
      
      <div className="container-fluid hero-bg p-0">
        <div className="hero-overlay">
        <div className="container">
          <div className="row">

              <div className="col-xxl-6 col-xl-6 col-md-12 col-lg-6 hero-col">
                <div className="hero-col-1">
                  <h3 className="sub-text">Satisfy Your Cravings</h3>
                  <h1 className="title-text">Delicious Foods With Wonderful Eating</h1>
                  <p className="pg-text">Accumsan quis, vulputate sit amet sapien. Curabitur euismod vulputate nulla, non fringilla neque condimentum placerat.</p>
                  <form>
                    <input type="text" placeholder ={myplaceholder} onChange={handleFilter}   />
                    <button type="submit" className="common_btn">
                      {filteredData.length === 0 ?  <img className='serchicon' src={serchicon}/> :  <img className='serchicon' src={closeicon}/> }
                     
                    </button>
                  </form> 
                  {filteredData.length != 0 &&(
                        <div className="dataResult"> 
                        {filteredData.slice(0, 15).map((value, key) =>{
                            return <a className="dataItem" href={value.link} target="_blank"> 
                                <p>{value.title}</p>
                            </a>
                        })}
                      </div>
                  )}
                  
                </div>
              </div>

              <div className="col-xxl-5 col-xl-6 col-sm-12 col-md-12 col-lg-6">
                <div className='hero-banner'>
                    <div className="hero-col-2-img">
                      <img src={heroimg2} />
                      <span>
                          35% off
                      </span>
                    </div>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>

    );
}

export default Herosection;
