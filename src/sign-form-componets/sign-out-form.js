import React, {useState, useEffect} from 'react';
import '../css/sing-in.css';
import { initializeApp } from "firebase/app";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase.js';
import { useHistory } from "react-router-dom";

const auth = getAuth(app);

const SingOutForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [inputformFields, setinputFormFields] = useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        confirmpassword:''
    });

    // *********************** validation codtion    **********************************

    const [errors, setErrors] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const history = useHistory();

    const validateField = (name, value) => {
        switch (name) {
            case 'fname':
            case 'lname':
                if (!value.trim()) {
                    return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
                } else if (value.length < 2 || value.length > 10) {
                    return `${name.charAt(0).toUpperCase() + name.slice(1)} must be between 2 and 10 characters`;
                }
                break;
            case 'email':
                if (!value.trim()) {
                    return 'Email is required';
                } else {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(value)) {
                        return 'Invalid email format';
                    }
                }
                break;
            case 'password':
                if (!value.trim()) {
                    return 'Password is required';
                } else if (value.length < 6) {
                    return 'Password must be at least 6 characters';
                }
                break;
            case 'confirmpassword':
                if (!value.trim()) {
                    return 'Confirm password is required';
                } else if (value !== inputformFields.password) {
                    return 'Passwords do not match';
                }
                break;
            default:
                break;
        }
        return '';
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = { ...errors };
        Object.entries(inputformFields).forEach(([name, value]) => {
            const error = validateField(name, value);
            if (error) {
                isValid = false;
                newErrors[name] = error;
            } else {
                newErrors[name] = '';
            }
        });
        setErrors(newErrors);
        if (isValid) {
            await signUp();
        }
    };

    // ***********   form input and check firebase condition ********************

    const signUp = async () => {
        console.log("Sign up button clicked");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, inputformFields.email, inputformFields.password);
            const user = userCredential.user;
            setinputFormFields({
                fname:'',
                lname:'',
                email:'',
                password:'',
                confirmpassword:''
            });
            console.log("User signed up successfully:", user);
            alert("Signup successful! You will now be redirected to the login page."); 
            history.push("/logIn"); // redireact log in page 

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing up:", errorMessage);
             console.error("Error signing up:", error.message);
            alert(error.message);
        }
    }

    

    const FormField = (e) => {

        const name= e.target.name;
        const value= e.target.value;

        setinputFormFields(() => ({
            ...inputformFields,
            [name]: value,

        }));

        const error = validateField(name, value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error
        }));

        console.log(inputformFields);
    };

    

  return (
    <>
    <div className='container-fluid sing-in-bg'>
        <div className='sign-in-overly'>
            <div className='container sing-in-container'>
                <div className='row'> 
    
                   <form >
                        
                   <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-12' >
                                        <div className="book-form-input sign-in-form-input">
                                            <label >First Name :</label>
                                            <input type="text" id="fname" name="fname" onChange= {FormField} value={inputformFields.fname} />
                                            <span className="error-message">{errors.fname}</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-12' >
                                        <div className="book-form-input sign-in-form-input">
                                            <label >Last Name :</label>
                                            <input type="text" id="lname" name="lname" onChange= {FormField} value={inputformFields.lname} />
                                            <span className="error-message">{errors.lname}</span>
                                        </div>
                                    </div>
                            </div>

                            <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-12' >
                                        <div className="book-form-input sign-in-form-input">
                                            <label >Email :</label>
                                            <input type="email" id="email" name="email"  onChange= {FormField} value={inputformFields.email}/>
                                            <span className="error-message">{errors.email}</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-md-12 col-12' >
                                        <div className="book-form-input sign-in-form-input">
                                            <label >PassWord :</label>
                                            <input  type={showPassword === false  ? "password" : "text"} id="password" name="password"  onChange= {FormField} value={inputformFields.password}/>
                                            <p className='icon'  onClick={()=>setShowPassword(!showPassword)}>
                                            {
                                                showPassword === false ?  (<i className="fa-solid fa-eye-slash"></i>)  :  (<i className="fa-solid fa-eye"></i>)
                                            }
                                            </p>
                                            <span className="error-message">{errors.password}</span>
                                        </div>
                                    </div>

                                    <div className='col-lg-12 col-md-12 col-12' >
                                        <div className="book-form-input sign-in-form-input">
                                            <label >confirm PassWord :</label>
                                            <input  type={showConfirmPassword === false  ? "password" : "text"} id="confirm_password" name="confirmpassword" onChange= {FormField}  value={inputformFields.confirmpassword}/>
                                            <p className='icon'  onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>
                                            {
                                                showConfirmPassword === false ?  (<i className="fa-solid fa-eye-slash"></i>)  :  (<i className="fa-solid fa-eye"></i>)
                                            }
                                            </p>
                                            <span className="error-message">{errors.confirmpassword}</span>
                                        </div>
                                    </div>
                            </div>

                            <div className='row'>
                                <div className="col-12">
                                    <button type="submit" className="book-form-btn sign-in-btn" onClick={handleSignUp}>Submit</button>
                                </div>
                            </div>

                   </form>


                   <div className='row'>
                        <div className='col-12 sign-up-link'>
                            <p> Already Have an Account ? <NavLink to="/logIn" className='sign-up-link-text'>Log In</NavLink></p>
                        </div>
                    </div>                     
     
                  
                    
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default SingOutForm;