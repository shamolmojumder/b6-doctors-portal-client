import React from "react";

const InfoCard = (props) => {
    const {id,name,icon,description,bgClass}=props.card;
  return (
    <div className={`card mt-8 text-white card-side shadow-xl p-6 ${bgClass}`}>
      <figure>
        <img
          src={icon}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        
      </div>
    </div>
  );
};

export default InfoCard;
