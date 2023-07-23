import React, { useContext } from "react";
import { AuthConext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyAppointment = () => {
    const {user}=useContext(AuthConext);
    const url=`http://localhost:5000/bookings?email=${user?.email}`;
    const {data:bookings=[]}=useQuery({
        queryKey:['bookings',user?.email],
        queryFn:async()=>{
            const res=await fetch(url);
            const data=await res.json();
            return data;
        }
    });
  return (
    <div>
      <h3 className="text-3xl lg:ml-36 mb-5">My Appointment</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {bookings.map((booking,i)=>{
                        return    <tr className="hover">
                        <th>{i}</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        </tr>
                    }
                    )}
                    
                </tbody>
                </table>
            </div>
    </div>
  );
};

export default MyAppointment;
