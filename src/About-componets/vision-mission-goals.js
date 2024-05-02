import React, {useState} from 'react';
import MissionApi from '../API/mission-api';

const Mission = () => {

    const [missioninfo, setMissioninfo] = useState(MissionApi);

    console.log(setMissioninfo);

  return (
    <>
      <div className='container-fluid mission-bg-sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-12 col-lg-6'>
                    <div className='row mission-row'>
                        {
                            missioninfo.map((missindata) => {
                                    const{id,img,title,text} = missindata;

                                    return(
                                        <>
                                           <div className='col-12 mission-col'>
                                                <div className='row mission-inner-row'>
                                                    <div className='col-12 col-md-1 col-lg-1 mission-col-1'>
                                                        <div className='mission-icon'>
                                                            <img src={img} className='img-fluid w-100'></img>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-md-11 col-lg-11 mission-col-2'>
                                                        <div className='mission-title'>{title}</div>
                                                        <div className='mission-info'>{text}</div>
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
    </>
  )
}

export default Mission;
