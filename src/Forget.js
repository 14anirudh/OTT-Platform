import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
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
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <Link to="/">
              <p className=" mb-6 text-4xl font-bold text-[#180920] text-center">
                FLICKERS
              </p>
            </Link>

            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Forgot your password? No worries we got you covered.
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
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
                className="w-full text-black bg-primary-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border"
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
