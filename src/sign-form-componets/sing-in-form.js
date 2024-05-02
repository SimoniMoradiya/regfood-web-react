import React, { useState } from 'react';
import '../css/sing-in.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase.js';
import { useHistory } from 'react-router-dom';


const auth = getAuth(app);

const SingInForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [inputformFields, setinputFormFields] = useState({
        email:'',
        password:''
    })

    const user = auth.currentUser;

    const history = useHistory();

    // *********************** validation codtion    **********************************

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!inputformFields.email) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(inputformFields.email)) {
            errors.email = 'Email is invalid';
            isValid = false;
        }

        if (!inputformFields.password) {
            errors.password = 'Password is required';
            isValid = false;
        } else if (inputformFields.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };


    // ***********   form input and check firebase condition ********************

    const signIn = (e) => {
            e.preventDefault();
            if(validateForm()){
                signInWithEmailAndPassword(auth, inputformFields.email, inputformFields.password)
                .then(() => {
                // Signed in 
                setinputFormFields({
                    email:'',
                    password:''
                });  
                alert('Login successful! Redirecting to home page.');
                localStorage.setItem('isLogin',true);
                history.push('/home'); // redireact home page 
                window.location.reload();
                })

                .catch((error) => {
                    // Handle sign-in errors
                    console.error('Sign-in error:', error);
                    // Redirect to sign-up page if user not found
                    alert('User data not found. Please sign up.');
                    history.push('/SignUp'); // redirect sign up page
                    
                });
        }
            
    }

    // *********  password show and hind condition *************

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const FormField = (e) => {

        const name= e.target.name;
        const value= e.target.value;

        setinputFormFields((prevState ) => ({
            ...prevState ,
            [name]: value,

        }));

        console.log(inputformFields);
    }

   

  return (
    <>
    <div className='container-fluid sing-in-bg'>
        <div className='sign-in-overly'>
            <div className='container sing-in-container'>
                <div className='row'> 
               
                    <form>

                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-12' >
                                    <div className="book-form-input sign-in-form-input">
                                        <label >Email :</label>
                                        <input type="email" id="email" name="email" onChange= {FormField} value={inputformFields.email} />
                                        {errors.email && <p className="error-message">{errors.email}</p>}
                                    </div>
                                    </div>
                                    <div className='col-lg-12 col-md-12 col-12' >
                                    <div className="book-form-input sign-in-form-input">
                                        <label >PassWord :</label>
                                        <input type={showPassword === false  ? "password" : "text"} id="password" name="password" onChange= {FormField} value={inputformFields.password}  />
                                        <p  className='icon' onClick={togglePasswordVisibility}>
                                            {
                                                showPassword === false ?  <i className="fa-solid fa-eye-slash"></i>  :  <i className="fa-solid fa-eye"></i>            
                                            }
                                        </p>
                                        {errors.password && <p className="error-message">{errors.password}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12">
                                    <button type="submit" className="book-form-btn sign-in-btn" onClick={signIn}>Submit</button>
                                </div>
                            </div>

                    </form>    

                    <div className='row'>
                        <div className='col-12 sign-up-link'>
                            <p> Not Have an Account ? <NavLink to="/SignUp" className='sign-up-link-text'>Sign Up</NavLink></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default SingInForm;
