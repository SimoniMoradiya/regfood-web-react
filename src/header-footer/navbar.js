import React, { Component , useRef, useState} from 'react';
import logoimg from '../images/logo.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    //login or logout user
    
    const [isLogin, setisLogin] = useState(false);  

    useEffect(() => {
      const is_Login = localStorage.getItem('isLogin');
    //   setisLogin(is_Login)
        setisLogin(is_Login === "true");
    },[]);


    const logOut = () =>{
        localStorage.removeItem('isLogin');
        setisLogin(false);
        
    }

    // menu show or hide

    const  [show, setShow] = useState(false);

    const showmenu = () => {
        setShow(!show);
    }
    
    const [navopen,setNavopen] = useState(false);

    const togglebtn = () => {
        setNavopen(!navopen);    
    }

    const handleclick = () => {
        showmenu();
        togglebtn();
    }


   // sticky hader

   const headerRef = useRef();

   useEffect(() => {
       window.addEventListener("scroll",()=> {
           let position = window.pageYOffset;
           if(position>100){
                headerRef.current.classList.add('fixed');
           }else{
                headerRef.current.classList.remove('fixed');
           }
       })
   },[])
    
   // dark mode

   const [modethem, setModeThem] = useState("light-theme");

   const modeChange = () => {
       if(modethem === "dark-theme")
       {
          setModeThem('light-theme');
       }else
       {
        setModeThem('dark-theme');
       }
   }

   useEffect(() => {
        document.body.className = modethem;
   },[modethem]);

return (
      
    <section className="nav-section my-header" ref={headerRef}>
        <nav className="navbar navbar-expand-lg">
        <div className="container">
            <Link className="navbar-brand" to="/"><img src={logoimg}/></Link>
            <button className={`navbar-toggler ${navopen ? 'toggled' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleclick}>
               {navopen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i> }
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : "" }`}>
            <ul className=" nav navbar-nav mb-2 mb-lg-0 justify-content-end">
                <li className="nav-item">
                <NavLink to="/home" aria-current="page" className="nav-link" >Home</NavLink>
                </li>
            
                <li className="nav-item">
                <NavLink to="/About Us" className="nav-link" aria-current="page" >About Us</NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Our Chef">Chefs</NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Menu">Menu</NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Food">Food</NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Contact">Contact</NavLink>
                </li>
                
            </ul>
            <form className="d-flex" role="search">

                {
                   isLogin
                        ?  (<button className="btn apply-btn" onClick={logOut}>Log Out</button>)
                        :  (<NavLink to="/logIn" type="button" className="btn apply-btn" >Log In</NavLink>)
                }
                
                
            </form>
            </div>
            <div className='row cart-icon'>
            <div className='col-12'>
                <span>3</span>
            <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
        <div className='row dark-mode'>
            <div className='col-12'>
                <button className='mode-icon' onClick={modeChange}>
                    {
                        modethem === "light-theme" ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>
                    }
                    
                </button>
           </div>
        </div>
        </div>
        
        </nav>
        
    </section>

);
};


export default Navbar;
