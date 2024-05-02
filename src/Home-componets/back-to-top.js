import React, {useState} from "react";

const BacktoTop = () => {

    const [visible, setVisible] = useState(false) ;

    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
          setVisible(true) 
        }  
        else if (scrolled <= 300){ 
          setVisible(false) 
        } 
      }; 

      const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth',
        }); 
      };

      window.addEventListener('scroll', toggleVisible);

    return(
        <>
        <button className="back-to-top" onClick={scrollToTop}  style={{display: visible ? 'inline' : 'none'}}><i className="fa-solid fa-hand-pointer"></i></button>
        </>
    );

}

export default BacktoTop;