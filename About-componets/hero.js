import React from 'react';
import Breadcrumb from './breadcrumb';

const Aboutherosection = ({title}) => {

  return (
    <>
      <div className='container-fluid breadcrumb-bg'>
        <div className='breadcrumb-bg-overly'>
            <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='breadcrumb-hadding'>{title}</h1>
                            <Breadcrumb />
                        </div>
                    </div>
            </div>
        </div>    
      </div>
    </>
  )
}

export default Aboutherosection;