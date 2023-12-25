import React, { useState } from "react";
import { imagePrefix } from "../data/dummyData";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const RestaurantCategory = ({ catergoryData , showItem , setShow , index }) => {
  const { title, itemCards } = catergoryData.card.card;

  return (
    <div className="card">
      {itemCards && (
        <div onClick={() => setShow(index)}>
          <div  className="cursor-pointer bg-[#f5f9ff] px-2 py-3  flex items-center justify-between" >
          <h4>{`${title} (${itemCards.length})`}</h4>
          {showItem ?  <FaChevronUp /> : <FaChevronDown /> }
          </div>
      
          {
            showItem &&  <div>
            {itemCards?.map((res, index) => {
              const { name, price, description, imageId } = res?.card?.info;
              return (
                <div className="px-2 mt-2 text-md font-semibold " key={index}>
                  <div className="flex items-center justify-between my-4">
                    <div className="w-9/12">
                      <div className="flex">
                        <h4>{name}</h4>
                        <h3 className="ml-2">- Rs {Math.ceil(price / 100)}</h3>
                      </div>
                      <h4 className="text-sm font-normal text-black mt-2">
                        {description}
                      </h4>
                    </div>
                    <div className="relative">
                      <img
                        src={imagePrefix + imageId}
                        alt="food image"
                        className="w-[120px] h-[80px]"
                      />
                      <div className="absolute bottom-[-10px] left-[30%]">
                        <button className="px-2 py-1 text-sm text-white font-normal bg-black">
                          Add +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          }
         
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
