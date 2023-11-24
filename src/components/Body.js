import React, { useEffect, useState } from "react";
// import { restaurantData } from "../data/dummyData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  console.log(searchText , "search Text")
  const [restData, setRestData] = useState([]);
  const [filteredRestaurant , setFilteredRestaurant] =  useState([])  //to resolve the filter issue
  const handleTopRated = () => {
    const data = restData.filter((res) => res.info.avgRating > 4);
    setRestData(data);
  };

  const fetchRestaurantData = async () => {
    const resp = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8496217&lng=81.0072193&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await resp.json();
    const { restaurants } =
      data.data.cards[2].card.card?.gridElements?.infoWithStyle;
    setRestData(restaurants);
    setFilteredRestaurant(restaurants)  //to resolve the filter issue
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  return (
    <>
      {restData.length > 0 ? (
        <div className="body">
          <div className="search-filter">
            <div className="search">
              <input
                type="text"
                placeholder="Search Restaurant"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                onClick={() => {
                  const searchedRest = restData.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase() ))
                  setFilteredRestaurant(searchedRest)
                }}
                className="search-btn"
              >
                Search
              </button>
            </div>
            <div>
              <button className="top-rated-btn" onClick={handleTopRated}>
                Top Rated Restaurants
              </button>
            </div>
          </div>
          <div className="restaurant-container">
            {filteredRestaurant.map((res) => {
              return <RestaurantCard key={res.info.id} restData={res.info} />;
            })}
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default Body;
