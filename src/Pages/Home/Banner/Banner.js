import React from "react";
import chair from "../../../assets/images/chair.png"
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import bg from '../../../assets/images/bg.png'
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div style={{background:`url(${bg})`}} className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:w-1/2 rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <NavLink to="appoinment"> <PrimaryButton>Get started</PrimaryButton> </NavLink>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
