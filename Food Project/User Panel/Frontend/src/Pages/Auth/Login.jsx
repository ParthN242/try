import React from "react";
import { MdClose } from "react-icons/md";
import foodImg from "../../assets/login-food-img.avif";
const Login = () => {
  return (
    <form className="flex flex-col gap-4 w-[80%]">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-[#6f7072]">
          Email
        </label>
        <input
          type="email"
          name="label"
          placeholder="Email..."
          className="border border-[#9fa0a3] text placeholder:text-[#9fa0a3] p-2 outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-[#6f7072]">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password..."
          className="border border-[#9fa0a3] text placeholder:text-[#9fa0a3] p-2 outline-none"
        />
      </div>
      <div>
        <button
          type="submit"
          className="uppercase bg-[#ff5200] text-white w-full py-3 mt-2 rounded-sm"
        >
          LOGIN
        </button>
        <p className="text-[11px] text-[#9fa0a3] mt-1 tracking-wide">
          By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </p>
      </div>
    </form>
  );
};

export default Login;
