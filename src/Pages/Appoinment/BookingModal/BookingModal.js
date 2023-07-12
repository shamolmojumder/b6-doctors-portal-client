import { format } from "date-fns/esm";
import React from "react";
import { useContext } from "react";
import { AuthConext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const BookingModal = ({treatment, setTreatment,selectedDate,refetch}) => {
  const {name: treatmentName ,slots}=treatment;
  const date=format(selectedDate,"PP")
  const{user}= useContext(AuthConext);
  // console.log(loginUser);
  const handleBooking=event=>{
    event.preventDefault();
    const form=event.target;
    const slot=form.slot.value;
    const name=form.name.value;
    const email=form.email.value;
    const phone=form.phone.value;
    const booking={
      appoinmentDate:date,
      treatment:treatmentName,
      patient:name,
      slot,
      email,
      phone
    }

    // const url="https://easy-blue-haddock-ring.cyclic.app/bookings"
    fetch('http://localhost:5000/bookings',{
      method:"POST",
      headers:{
        'Content-type': 'application/json',
      },
      body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if (data.acknowledged) {
        setTreatment(null);
        console.log(booking);
        toast.success("Booking confirm")
        refetch()
        // toast(
        //   "This toast is super big. I don't think anyone could eat it in one bite.\n\nIt's larger than you expected. You eat it but it does not seem to get smaller.",
        //   {
        //     duration: 6000,
        //   }
        // );
      }
    
    })
    
  }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {treatmentName}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
           
            <input disabled type="text" value={date} className="input w-full input-bordered" />
              <select name="slot" className="select select-bordered w-full">
              
                  { 
                    slots.slice(0,3).map((slot,index)=> <option key={index} value={slot}>{slot}</option>)
                  }
                
              </select>

            <input name="name" disabled defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input w-full input-bordered" required/>
            <input name="email" disabled defaultValue={user?.email} type="email" placeholder="Email" className="input w-full input-bordered" required/>
            <input name="phone" type="tel" readOnly defaultValue={"01580926671"} placeholder="Phone Number" className="input w-full input-bordered" />
           
            <input className="btn btn-accent w-full" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
