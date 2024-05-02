import React from 'react';
import Aboutherosection from '../About-componets/hero';
import SingOutForm from '../sign-form-componets/sign-out-form';

const SignUp = () => {

        const data = {
            title: "Sign Up",
        }

  return (
    <>
      <Aboutherosection {...data}/>
      <SingOutForm />
    </>
  );
};

export default SignUp;
