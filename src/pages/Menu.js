import React from 'react';
import Aboutherosection from '../About-componets/hero';
import MenuItem from '../menu-componets/menu-item';

const Menu = () => {

    const data = {
        title: "Our Menu",
    }

  return (
    <>

        <Aboutherosection {...data}/>
        <MenuItem />
    </>
  )
}

export default Menu;
