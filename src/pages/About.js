import React from 'react';
import Aboutherosection from '../About-componets/hero.js';
import Aboutcompany from '../About-componets/about-company.js';
import Mission from '../About-componets/vision-mission-goals.js';
import ChooseUs from '../About-componets/why-choose-us.js';

const Aboutpage = () => {

  const data = {
    title: "About Us",
}

  return (
    <>
    <Aboutherosection {...data} />
    <Aboutcompany />
    <Mission />
    <ChooseUs />
    </>
  )
}

export default Aboutpage;

