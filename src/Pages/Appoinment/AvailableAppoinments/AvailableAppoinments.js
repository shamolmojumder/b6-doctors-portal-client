import { format } from "date-fns";
import React, {useState } from "react";
import AppoinmentOption from "./AppoinmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppoinments = ({ selectedDate }) => {
  // const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  //console.log(appoinmentOptions);
  const [treatment, setTreatment] = useState(null)
  const date = format(selectedDate,"PP")
  const { data:appoinmentOptions = [],refetch,isLoading } = useQuery({
    queryKey: ['appoinmentOptions',date],
    queryFn: async()=>{
      const res=await fetch(`http://localhost:5000/appoinmentOptions?date=${date}`);
      const data=res.json()
      return data
    },
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/appoinmentOptions")
  //   .then(res=>res.json())
  //   .then(data=>setAppoinmentOptions(data))
  // }, []);

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
        <BookingModal selectedDate={selectedDate} treatment={treatment}  setTreatment={setTreatment} refetch={refetch}></BookingModal>
      }
    </section>
  );
};

export default AvailableAppoinments;
