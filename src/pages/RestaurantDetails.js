import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "../components/RestaurantCategory";

const RestaurantDetails = () => {
  const [restaurantData, setRestaurantData] = useState({});
  const [categoryList , setCategoryList] = useState([])

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
    // console.log(
    //   data?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards,
    //   "card details"
    // );
    setCategoryList(data?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards)
  };

  const catergories =  categoryList.filter(c => c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  // console.log(catergories , "categories")

  return (
    <div className="menu max-w-[800px] m-auto">
      <h1>{restaurantData?.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>Mutton Korma</li>
        <li>Pizza</li>
      </ul>
      <div>
        {
          categoryList.map((res , index) => {
            return (
              <div className="my-4" key={index}>
                 <RestaurantCategory catergoryData={res} />
              </div>
             
            )
          })
        }
       
      </div>
    </div>
  );
};

export default RestaurantDetails;
