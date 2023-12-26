import React, { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
// import { restaurantData } from "../data/dummyData";
import RestaurantCard, { WithPromotedLael } from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const { loggedInUser } = userInfo;
  const [searchText, setSearchText] = useState("");
  searchText, "search Text";
  const [restData, setRestData] = useState([]);
  restData, "restData";
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //to resolve the filter issue
  filteredRestaurant, "fil";

  const handleTopRated = () => {
    const data = restData.filter((res) => res.info.avgRating >= 4);
    // setRestData(data);
    setFilteredRestaurant(data);
  };

  // Coponent
  const RestaurantWithPromoted = WithPromotedLael(RestaurantCard);

  const fetchRestaurantData = async () => {
    const resp = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8496217&lng=81.0072193&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await resp.json();
    // const { restaurants } =
    //   data.data.cards[2].card.card?.gridElements?.infoWithStyle;
    setRestData(
      data.data.cards[2].card.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      data.data.cards[2].card.card?.gridElements?.infoWithStyle?.restaurants
    ); //to resolve the filter issue
    console.log(data.data.cards[2].card.card, "ash");
  };

  useEffect(() => {
    fetchRestaurantData();
    const timer = setInterval(() => {
      console.log("Namaste React Use Effect");
    }, 1000);
    return () => {
      // this return will run when we leave the component/page , we can say it is kind of unmounting phase
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {restData?.length > 0 ? (
        <div className="">
          <div className="flex items-center justify-between py-3">
            <div className="">
              <input
                type="text"
                placeholder="Search Restaurant"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="border h-8 px-2"
              />
              <button
                onClick={() => {
                  const searchedRest = restData.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurant(searchedRest);
                }}
                className="py-1 px-2 mx-2 rounded-md bg-red-200"
              >
                Search
              </button>
              <label>User Name : </label>
              <input
                type="text"
                value={userInfo.loggedInUser}
                onChange={(e) =>
                  setUserInfo({
                    loggedInUser: e.target.value,
                  })
                }
                className="border border-black px-2"
              />
            </div>
            <div>
              <button
                className="py-1 px-2 mx-2 rounded-md bg-green-200"
                onClick={handleTopRated}
              >
                Top Rated Restaurants
              </button>
            </div>
          </div>
          <div>
            <div className="grid sm:grid-cols-3  gap-4 md:grid-cols-4 lg:grid-cols-5">
              {filteredRestaurant.map((res) => {
                if (res.info.avgRating > 4) {
                  return (
                    <RestaurantWithPromoted
                      key={res.info.id}
                      restData={res.info}
                    />
                  );
                } else {
                  return (
                    <RestaurantCard key={res.info.id} restData={res.info} />
                  );
                }
                // console.log(res.info.avgRating , "Rating")
                // return <RestaurantCard key={res.info.id} restData={res.info} />;
                // return  <RestaurantWithPromoted key={res.info.id} restData={res.info} />
                // {
                //   res.info.avgRating < 4 ? ( <RestaurantWithPromoted key={res.info.id} restData={res.info} />) : (<RestaurantCard key={res.info.id} restData={res.info} /> );
                // }
              })}
            </div>
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default Body;
