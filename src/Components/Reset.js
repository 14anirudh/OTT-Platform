import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Toastr, toastr } from "react-redux-toastr";

const Reset = () => {
  const { confirmPassword } = UserAuth();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const code = new URLSearchParams(window.location.search).get("oobCode");
    console.log(code);
    try {
      await confirmPassword(code, password);
      toastr.success("Password Updates Successfully");
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      toastr.error("Error", e.message.substring(10, e.message.indexOf(".")));
    }
  };

  return (
    <div className="h-screen">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <div className="w-full p-6 rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
            <Link to="/">
              <p className=" mb-12 text-4xl font-bold text-[#9AE39A] text-center">
                FLICKERS
              </p>
            </Link>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  for="password"
                  className="block mb-2 text-lg font-medium text-[#8E6E9F] dark:text-white"
                >
                  Enter new password
                </label>
                <input
                  type="password"
                  name="passwrod"
                  id="pass"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="inline-block w-[100%] px-7 py-3 bg-[#9AE39A]  text-[#180920] font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#8E6E9F] hover:text-[#9AE39A] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#180920]  active:shadow-lg transition duration-150 ease-in-out"
              >
                Reset password
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reset;
