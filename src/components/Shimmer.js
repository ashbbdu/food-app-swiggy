// import { Skeleton } from "primereact/skeleton";
import React from "react";
import { dummyArr } from "../data/dummyData";


const Shimmer = () => {
  
  return (
    <div className="grid sm:grid-cols-3  gap-4 md:grid-cols-4 lg:grid-cols-5">
      {
        dummyArr.map((res , index) => {
          return (
            <div key={index} className="border-round border-1 surface-border p-4 surface-card bg-gray-200 mt-4 rounded-md min-h-[250px]">
            <div className="flex mb-3">
            </div>
            <div width="100%" height="220px"></div>
            <div className="">
              <div width="70%" height="2rem" className="mt-2"></div>
              <div width="50%" height="2rem" className="mt-2"></div>
              <div width="30%" height="2rem" className="mt-2"></div>
            </div>
          </div>
          )
        })
      }
  
  
    
  

    </div>
  );
};

export default Shimmer;
