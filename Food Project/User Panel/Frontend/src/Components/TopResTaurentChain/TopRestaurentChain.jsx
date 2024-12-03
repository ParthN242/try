import React, { useEffect, useRef, useState } from "react";
import Slider from "../Slider/Slider";
import { MdStars } from "react-icons/md";
import { data } from "./data";
import { Link } from "react-router-dom";

const TopRestaurentChain = () => {
  const sliderRef = useRef(null);
  const [currentSlider, setCurrentSlider] = useState(null);

  useEffect(() => {
    if (sliderRef.current) {
      setCurrentSlider(sliderRef.current);
    }
  }, [sliderRef]);
  return (
    <div className="p-4 max-md:p-2">
      <div className="flex items-center justify-between max-md:gap-2 mb-4">
        <h4 className="text-[22px] max-md:text-[20px]  font-[gil-bold]">
          Top restaurant chains in Surat
        </h4>
        <Slider element={currentSlider} />
      </div>
      <div
        className="flex flex-nowrap gap-8 max-md:gap-4 max-w-full overflow-x-auto scrollbar-none"
        ref={sliderRef}
      >
        {data.length &&
          data.map((d) => (
            <Link
              to={"/"}
              className="min-w-[250px] max-md:min-w-[136px] flex flex-col gap-2 hover:scale-[0.98] transition-all duration-100 ease-out"
              key={d.info.id}
            >
              <div className="relative w-full h-[180px] max-md:h-40 ">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${d.info.cloudinaryImageId}`}
                  alt=""
                />
              </div>
              {/* Info */}
              <div>
                <p className="font-[gil-bold] text-lg max-md:text-[16px] max-md:leading-[19px] truncate">
                  {d.info.name}
                </p>
                <div className="flex items-center gap-1">
                  <MdStars className="text-green-700 text-lg max-md:text-[14px]" />
                  {d.info.avgRating}
                  {" • "}
                  {d.info.sla.slaString}
                </div>
                <div className="truncate-2  max-md:text-[14px]">
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

export default TopRestaurentChain;
