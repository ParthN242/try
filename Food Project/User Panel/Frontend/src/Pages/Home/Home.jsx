import React from "react";
import ShowCaseFood from "../../Components/ShowCaseFood/ShowCaseFood";
import TopRestaurentChain from "../../Components/TopResTaurentChain/TopRestaurentChain";
import OnlineRestaurent from "../../Components/OnlineRestaurent/OnlineRestaurent";

const Home = () => {
  return (
    <main className="">
      <div className="w-[75%] max-lg:w-[85%] max-md:w-[95%] mx-auto">
        <ShowCaseFood />
        <hr className="my-[24px] " />
        {/* Restaurant */}
        <TopRestaurentChain />
        <hr className="my-[24px] " />
        <OnlineRestaurent />
      </div>
    </main>
  );
};

export default Home;
