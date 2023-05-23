import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

const Reset = () => {
  const { confirmPassword } = UserAuth();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const code =new URLSearchParams(window.location.search).get("oobCode");
    console.log(code);
    try {
      await confirmPassword(code, password);
    } catch (e) {
      console.log(e.message);
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
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  for="password"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
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
                className="w-full text-black bg-primary-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border"
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
