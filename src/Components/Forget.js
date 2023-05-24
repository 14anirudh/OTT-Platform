import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { toastr } from "react-redux-toastr";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { resetPassword } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPassword(email);
      toastr.success("Email sent successfully");
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
              <p className=" mb-6 text-4xl font-bold text-[#9AE39A] text-center">
                FLICKERS
              </p>
            </Link>

            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-[#8E6E9F] md:text-2xl dark:text-white">
              Forgot your password? No worries we got you covered.
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-lg font-medium text-[#8E6E9F] dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
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
      {/* <button
          onClick={() => toastr.error('The title', 'The message')}
          type="button">Toastr Success</button> */}
    </div>
  );
};

export default Forget;
