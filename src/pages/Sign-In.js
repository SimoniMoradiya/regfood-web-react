import React from 'react';
import Aboutherosection from '../About-componets/hero';
import SingInForm from '../sign-form-componets/sing-in-form';

const SignIn = () => {

        const data = {
            title: "Log In",
        }

  return (
    <>
      <Aboutherosection {...data}/>
      <SingInForm />
    </>
  );
};

export default SignIn;
