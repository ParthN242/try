import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import foodImg from "../../assets/login-food-img.avif";
import Login from "./Login";
import SignUp from "./SignUp";
const Auth = ({ setIsAuthOpen }) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#282c3fa8] z-[1000] overflow-hidden scrollbar-none flex ">
      <div
        className="w-[65%] h-full"
        onClick={() => setIsAuthOpen(false)}
      ></div>
      <div className="w-[45%] bg-white h-full pt-[30px] pl-[40px] pr-[160px] max-lg:pr-[60px] ">
        <div className="" onClick={() => setIsAuthOpen(false)}>
          <MdClose className="text-[#535665] text-2xl cursor-pointer" />
        </div>
        <div className="my-8 relative">
          <h3 className="text-[30px] leading-none">
            {isLogin ? "Login" : "Sign Up"}
          </h3>
          <p className="py-4 relative text-light-gray text-sm after:content-[''] after:block after:w-[30px] after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:absolute">
            or{" "}
            {isLogin ? (
              <span
                className="text-[#ff5200] cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                create an account
              </span>
            ) : (
              <span
                className="text-[#ff5200] cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                login to your account
              </span>
            )}
          </p>
          <div className="absolute right-0 -top-3">
            <img src={foodImg} alt="food image" width={100} height={105} />
          </div>
        </div>
        {/* Form */}
        {isLogin ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default Auth;
