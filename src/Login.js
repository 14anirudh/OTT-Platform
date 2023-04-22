import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signIn } = UserAuth();
  // const { user, logout } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  // const handleLogout = async () => {
  //       try {
  //           await logout();
  //           navigate('/subscription');

  //       } catch (e) {
  //           console.log(e.message);
  //       }
  //   };

  return (
    <>
      <div>
        <h1 className="text-4xl mx-4 pt-3 text-[#D91212] font-bold ">
          FLICKERS
        </h1>
      </div>
      <section className="h-screen">
        {/* <div>
          <p>user email :{user && user.email}</p>
          <button onClick={handleLogout}>logout</button>
        </div> */}
        <div className="px-6 h-full text-[#EB4544] ">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div className="flex items-center justify-center lg:justify-start">
                  <p className="text-3xl mr-4 mb-6">SIGN IN </p>

                </div>

                {/* <div className="flex items-center my-4 before:flex-1 before:border-t before:border-reed-300 before:mt-0.5 after:flex-1 after:border-t after:border-reed-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div> */}

                {/* <!-- Email input --> */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-reed-700 bg-white bg-clip-padding border border-solid border-reed-300 rounded transition ease-in-out m-0 focus:text-reed-700 focus:bg-white focus:border-[#EB4544]  focus:outline-none"
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
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-reed-700 bg-white bg-clip-padding border border-solid border-reed-300 rounded transition ease-in-out m-0 focus:text-reed-700 focus:bg-white focus:border-[#EB4544]  focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    
                  </div>
                  <a href="#!" className="text-red-800 hover:text-[#D91212]">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="inline-block px-7 py-3 bg-[#EB4544]  text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#D91212]  hover:shadow-lg focus:bg-[#EB4544]  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#EB4544]  active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="/subscription"
                      className="text-[#EB4544]  hover:text-[#D91212]  focus:text-[#EB4544]  transition duration-200 ease-in-out"
                    >
                      {" "}
                      Subscribe Now
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
