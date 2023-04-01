import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoinmentOption from "./AppoinmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppoinments = ({ selectedDate }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  console.log(appoinmentOptions);
  const [treatment, setTreatment] = useState(null)


  useEffect(() => {
    fetch("appoinmentOption.json")
    .then(res=>res.json())
    .then(data=>setAppoinmentOptions(data))
  }, []);

  return (
    <section className="my-16">
      <p className="text-secondary text-center font-bold">
        Available Services on {format(selectedDate, "PP")}
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 ">
        {appoinmentOptions.map((option) => (
          <AppoinmentOption
            key={option._id}
            appoinmentOption={option}
            setTreatment={setTreatment}
          ></AppoinmentOption>
        ))}
      </div>
      { treatment && 
        <BookingModal selectedDate={selectedDate} treatment={treatment}  setTreatment={setTreatment}></BookingModal>
      }
    </section>
  );
};

export default AvailableAppoinments;