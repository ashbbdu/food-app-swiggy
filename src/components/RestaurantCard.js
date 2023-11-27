import React from "react";
import { Link } from "react-router-dom";
import { imagePrefix } from "../data/dummyData";

const RestaurantCard = ({ restData  }) => {
  const { avgRating, cuisines, name, costForTwo, sla, cloudinaryImageId , id } =
    restData;
    
   
  return (
   <Link to={`/restaurant/${id}`}>
     <div className="res-card">
      <img
        src={`${imagePrefix}${cloudinaryImageId}`}
        className="food-image"
        alt="food"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
   </Link>
  );
};

export default RestaurantCard;
