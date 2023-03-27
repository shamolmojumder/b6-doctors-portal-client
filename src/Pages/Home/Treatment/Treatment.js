import React from "react";
import treatment from "../../../assets/images/treatment.png";
const Treatment = () => {
  return (
    <div>
      {/* <div className="card mt-4 py-6 card-side">
      <figure>
        <img src={treatment} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page{" "}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
     */}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={treatment} className="h-[576px] rounded-lg shadow-2xl" alt="" />
          <div className="">
            <h1 className="lg:ml-6   text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="p-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
              <button className="ml-[25px]  btn btn-primary bg-gradient-to-r from-primary to-secondary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
