import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { imagePrefix } from "../data/dummyData";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ restData  }) => {
  console.log(restData , "rest data");
  const {userInfo} = useContext(UserContext)
  const { avgRating, cuisines, name, costForTwo, sla, cloudinaryImageId , id } =
    restData;
    
   
  return (
   <div className="border mt-4 p-2 rounded-lg bg-gray-50 hover:scale-105 transition-all duration-300">
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
      {/* <h4>Logged In User : {userInfo.loggedInUser}</h4> */}
    </div>
   </Link>
   </div>
  );
};


export const WithPromotedLael = (RestaurantCard) => {
    return ({restData}) => {
      // console.log(restData , "RestData")
      return (
        <div className="flex">
          <label className="absolute bg-black text-white rounded-md">Promoted</label>
          <RestaurantCard restData={restData} />
      
        </div>
       )
    }
}

export default RestaurantCard;
