import React, { useEffect } from 'react';
import { useGlobalContext } from '../API/context';

const MenuItem = () => {

    const {hits, nbPages , isLoading} = useGlobalContext();

    
    if(isLoading){
        return(
            <>
               <div className='container m-auto text-center'><h1 className='daily-offer-hadding'>Loading...</h1></div>
                
            </>
        );
    }

  return (
    <>

    <div className='container'>
    <div className='row'>
      {hits.map((curmenu) => {

        const {objectID, title, author, num_comments, updated_at, url} = curmenu;
            return (
                
                
                  <div className='col-12 col-md-6 col-lg-4 menu-item-box m-auto' key={objectID}>
                                    <div className='menu-item' >
                                        <div className='menu-item-text' >
                                            <h3 className='offer-item-hadding m-0 pb-2 menu-item-hedding'>{title}</h3><br></br>
                                            <p className='offer-item-pg menu-item-pg'>Date & Time : {updated_at}</p>
                                             <p className='company-info-list-text'>comments : {num_comments}</p><br></br>
                                            <p className='menu-item-price menu-author'>Author : {author}</p>
                                            <a href={url} className='menu-item-btn menu-api-btn'>View Menu</a>
                                        </div>
                                    </div>
                        
                                </div>
                                
                
            );
      })}
      </div>
      </div>
    </>
  )
}

export default MenuItem;
