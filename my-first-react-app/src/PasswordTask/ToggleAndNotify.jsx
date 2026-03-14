import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const ToggleAndNotify = () => {
    //! state to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    //! toggle password visibility
    let togglePassword = () => {
        setShowPassword(!showPassword);
    }

    //!handlesubmit
    let handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Login Successfull");
    }

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <article className="w-1/4 bg-white shadow-2xl rounded-lg">
        <header className="text-center p-5 bg-blue-600 rounded-t-lg">
          <h1 className="text-2xl font-semibold text-white">
            Login Welcome Back User!
          </h1>
        </header>
        <main className="w-full">
          <form className="w-full flex flex-col gap-2 p-6" onSubmit={handleSubmit}>
            <div className="w-full  flex flex-col gap-2 relative">
              <label
                htmlFor="email"
                className="text-lg text-gray-600 font-semibold"
              >
                Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="py-2 pl-8 outline-none border border-gray-400 rounded-md focus:ring-1 focus:ring-blue-700 "
              />
              <span className="absolute top-12 left-2">
                <FaUserAlt className="text-blue-600" /> 
              </span>
            </div>
            <div className="w-full  flex flex-col gap-2 relative">
              <label
                htmlFor="password"
                className="text-lg text-gray-600 font-semibold"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="py-2 pl-8 outline-none border border-gray-400 rounded-md focus:ring-1 focus:ring-blue-700 "
              />
              <span className="absolute top-12 left-2">
                <RiLockPasswordFill className="text-blue-600" /> 
              </span>
              <span>
                {showPassword ? (
                  <FaEyeSlash
                    className="absolute top-12 right-2 cursor-pointer text-gray-600"
                    onClick={togglePassword}
                  />
                ) : (
                  <FaEye
                    className="absolute top-12 right-2 cursor-pointer text-gray-600"
                    onClick={togglePassword}
                  />
                )}

              </span>
            </div>
            <div className="w-full flex justify-center items-center mt-4">
              <button className="bg-blue-600 py-2 px-20 rounded-lg text-white font-semibold cursor-pointer hover:scale-105 transition-all duration-100 ease-linear">
                Login User
              </button>
            </div>
          </form>
        </main>
      </article>
    </section>
  )
}

export default ToggleAndNotify