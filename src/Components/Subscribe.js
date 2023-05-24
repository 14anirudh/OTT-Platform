import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toastr } from "react-redux-toastr";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    setError("");
    try {
      await createUser(email, password);
      navigate("/payment");
      // toastr.success('sign Up Successfull',"Moving to payment page")
    } catch (e) {
      setError(e.message);
      const sub = e.message.substring(10, e.message.indexOf("."));
      toastr.error("Error Signing Up", sub);
      console.log(e.message);
    }
  };
  return (
    <div className="flex flex-col xl:justify-center lg:justify-between justify-center items-center flex-wrap h-screen g-6">
      <div className="xl:ml-12 xl:w-4/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 ">
        <Link to="/">
          <h1 className="text-4xl text-center mx-4 pt-3 text-[#9AE39A] font-bold ">
            FLICKERS
          </h1>
        </Link>
        <p className="text-xl mt-4 text-[#8E6E9F] text-center font-bold ">
          Discover new worlds with access to{" "}
        </p>
        <p className="text-xl mb-16 text-[#8E6E9F] text-center font-bold ">
          thousands of titles
        </p>

        <form>
          {/* <!-- Email input --> */}
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl text-[#180920] font-normal text-reed-700 bg-white bg-clip-padding border border-solid border-reed-300 rounded transition ease-in-out m-0 focus:text-reed-700 focus:bg-white focus:border-[#9AE39A]  focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          {/* <!-- Password input --> */}
          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl text-[#180920] font-normal text-reed-700 bg-white bg-clip-padding border border-solid border-reed-300 rounded transition ease-in-out m-0 focus:text-reed-700 focus:bg-white focus:border-[#9AE39A]  focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="text-center ">
            <button
              type="button"
              className="inline-block w-[100%] px-7 py-3 bg-[#9AE39A]  text-[#180920] font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#8E6E9F] hover:text-[#9AE39A] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#180920]  active:shadow-lg transition duration-150 ease-in-out"
              onClick={handleSubmit}
            >
              Proceed for Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
