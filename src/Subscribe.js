import React,{useState} from 'react'
import { UserAuth } from './context/AuthContext';
import {useNavigate} from 'react-router-dom';

const Subscribe = () => {

  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const[error, setError] =useState('');
  const navigate=useNavigate();

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {

    setError('');
    try {
      await createUser(email, password);
      navigate('/home');
      
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div
       className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
     >
    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
    <form onClick={
                handleSubmit
               }>
           {/* <!-- Email input --> */}
           <div className="mb-6">
             <input
               type="text"
               className="form-control block w-full px-4 py-2 text-xl text-[#000000] font-normal text-reed-700 bg-white bg-clip-padding border border-solid border-reed-300 rounded transition ease-in-out m-0 focus:text-reed-700 focus:bg-white focus:border-[#EB4544]  focus:outline-none"
               id="exampleFormControlInput2"
               placeholder="Email address"
               onChange={(e) => { setEmail(e.target.value) }}
             />
           </div>
 
           {/* <!-- Password input --> */}
           <div className="mb-6">
             <input
               type="password"
               className="form-control block w-full px-4 py-2 text-xl text-[#000000] font-normal text-reed-700 bg-white bg-clip-padding border border-solid border-reed-300 rounded transition ease-in-out m-0 focus:text-reed-700 focus:bg-white focus:border-[#EB4544]  focus:outline-none"
               id="exampleFormControlInput2"
               placeholder="Password"
               onChange={(e) => { setPassword(e.target.value) }}
             />
           </div>
 
          
 
           <div className="text-center lg:text-left">
             <button
               type="button"
               className="inline-block px-7 py-3 bg-[#EB4544]  text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#D91212]  hover:shadow-lg focus:bg-[#EB4544]  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#EB4544]  active:shadow-lg transition duration-150 ease-in-out"
               
             >
               Sign up
             </button>
             
           </div>
         </form>
         </div>
         </div>
  )
}

export default Subscribe