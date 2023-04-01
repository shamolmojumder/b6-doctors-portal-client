import React from "react";

const AppoinmentOption = ({ appoinmentOption,setTreatment }) => {
  const { name, slots } = appoinmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center mt-10">
        <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
        <p> {slots.length> 0 ? slots[0]:"try another day"} </p>
        <p> {slots.length} {slots.length>1 ?"seats": "seat"} available </p>
        <div className="card-actions justify-center">
         
          <label onClick={()=>setTreatment(appoinmentOption)} htmlFor="booking-modal" className="btn btn-primary text-white">{slots.length===0 ?"All are booked":"Book Appoinment" }</label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOption;
