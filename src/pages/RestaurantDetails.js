import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const [restaurantData, setRestaurantData] = useState({});

  const { id } = useParams();
  useEffect(() => {
    restaurantDetails();
  }, []);

  const restaurantDetails = async () => {
    const details = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8496217&lng=81.0072193&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await details.json();
    // console.log(data?.data?.cards[0]?.card?.card?.info, "data");
   setRestaurantData(data?.data?.cards[0]?.card?.card?.info);
  };

  return (
    <div className="menu">
      <h1>{restaurantData?.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>Mutton Korma</li>
        <li>Pizza</li>
      </ul>
    </div>
  );
};

export default RestaurantDetails;
