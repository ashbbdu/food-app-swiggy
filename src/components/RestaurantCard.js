import React from "react";
import { imagePrefix } from "../data/dummyData";

const RestaurantCard = ({ restData }) => {
  const { avgRating, cuisines, name, costForTwo, sla, cloudinaryImageId } =
    restData;
  return (
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
  );
};

export default RestaurantCard;
