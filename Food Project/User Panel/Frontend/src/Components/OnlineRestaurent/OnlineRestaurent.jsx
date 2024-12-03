import React, { useEffect, useRef, useState } from "react";
import Slider from "../Slider/Slider";
import { MdStars } from "react-icons/md";
import { data } from "./data";
import { Link } from "react-router-dom";

const OnlineRestaurent = () => {
  return (
    <div className="px-4 py-8 max-md:px-4 w-full">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-[22px] max-md:text-[20px] font-[gil-bold]">
          Restaurants with online food delivery in Surat
        </h4>
      </div>
      <div className="mb-4 flex items-center gap-2">
        <div className="py-2 px-3 border border-[rgba(2, 6, 12, 0.15)] rounded-[18px] text-[#02060cbf]">
          Filter
        </div>
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-2 gap-6 max-md:gap-y-8 max-md:gap-4 max-w-full scrollbar-none">
        {data.length &&
          data.map((d) => (
            <Link
              to={"/"}
              className={`w-full flex flex-col gap-4 hover:scale-[0.98] transition-all duration-100 ease-out`}
              key={d.info.id}
            >
              <div className="relative w-full h-[135px]">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${d.info.cloudinaryImageId}`}
                  alt=""
                />
              </div>
              {/* Info */}
              <div>
                <p className="font-[gil-bold] text-lg leading-4 truncate">
                  {d.info.name}
                </p>
                <div className="flex items-center gap-1 line-clamp-1 whitespace-nowrap ">
                  <MdStars className="text-green-700 text-lg " />
                  {d.info.avgRating}
                  {" • "}
                  {d.info.sla.slaString}
                </div>
                <div className="truncate-2">
                  <p className="text-light-gray text-sm line-clamp-2">
                    {d.info.cuisines.join(", ")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default OnlineRestaurent;
