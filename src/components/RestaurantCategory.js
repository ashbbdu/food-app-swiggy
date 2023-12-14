import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { imagePrefix } from "../data/dummyData";

const RestaurantCategory = ({ catergoryData }) => {
  const { title, itemCards } = catergoryData.card.card;
  return (
    <div className="card">
      {itemCards && (
        <Accordion multiple={false} activeIndex={[0]}>
          <AccordionTab header={`${title} (${itemCards.length})`} className="acc-header">
            <div>
              {itemCards?.map((res, index) => {
                const {name , price , imageId} =  res?.card?.info
                return (
                  <div className="px-2 mt-2 text-md font-semibold" key={index}>
                    <div className="flex items-center justify-between">
                     <div>
                     <h4>{name}</h4>
                     <h3>Rs {Math.ceil(price / 100)}</h3>
                        </div>

                      <img
                        src={imagePrefix + imageId}
                        alt="food image"
                        width={80}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </AccordionTab>
        </Accordion>
      )}
    </div>
  );
};

export default RestaurantCategory;
