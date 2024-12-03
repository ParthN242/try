import React from "react";

const Cart = () => {
  return (
    <div className="bg-[#e9ecee] w-full min-h-[100vh] flex">
      <div className=" mt-[30px] mb-[150px] w-[80%] mx-auto flex gap-[30px]">
        <div className="w-[65%] bg-white"> Address & Payment</div>
        <div className="w-[35%] bg-white">
          <div className="flex flex-col">
            <div className="py-[20px] px-[30px] flex gap-2">
              <div>
                <img
                  class=""
                  imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/d3e4ebb797f8762f33a080d5c4e4b882"
                  height="50"
                  width="50"
                  imageid=""
                  alt="img renderer"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/d3e4ebb797f8762f33a080d5c4e4b882"
                ></img>
              </div>
              <div className="flex flex-col gap-[1px] ">
                <div>Jain Farsan House</div>
                <div className="text-[12px] text-[#686b78]">City Ligh Town</div>
                <div className="w-[50px] h-[2px] bg-black mt-1"></div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-1">
                <div></div>
              </div>
            </div>
            <div className="py-[20px] px-[30px] flex items-center justify-between border-t border-gray-400">
              <div>To Pay</div>
              <div>₹426</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
