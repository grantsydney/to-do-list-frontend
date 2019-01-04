import React from 'react';
import { NavLink } from 'react-router-dom';


const Splash = () => {
  return (

  <div className="splash-page">

    <NavLink to="/ToDo" exact className="to-do-link">Click Here To Get Started</NavLink>
  </div>
  );
};

export default Splash;
