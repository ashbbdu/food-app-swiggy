import React from "react";
import { Link } from "react-router-dom";
import { imagePrefix } from "../data/dummyData";

const RestaurantCard = ({ restData  }) => {
  const { avgRating, cuisines, name, costForTwo, sla, cloudinaryImageId , id } =
    restData;
    
   
  return (
   <div className="border mt-4 p-2 rounded-lg  hover:scale-105 transition-all duration-200">
      <Link to={`/restaurant/${id}`}>
     <div className="res-card">
      <img
        src={`${imagePrefix}${cloudinaryImageId}`}
        className="h-[250px] w-full rounded-lg"
        alt="food"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
   </Link>
   </div>
  );
};

export default RestaurantCard;
