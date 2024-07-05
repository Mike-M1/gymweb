import React from 'react'
import { useNavigate } from "react-router-dom";

export default function CredentialForm() {

  const navigate = useNavigate();
  const goToAccount = () => {
    navigate("/User=:name")
  }
  return (
    <div className='h-screen bg-slat'>
      <div className="flex flex-col w-screen  h-screen bg-transparent justify-center items-center">
        <div className="flex flex-col gap-[20px] justify-center items-center bg-white p-[20px] py-[50px] px-[30px]">

          <div className='flex flex-row font-heading gap-[20px] mb-[30px]  text-[40px]'>
            <div>Log In</div>
            <div>Sign Up</div>
          </div>

          <div className=" flex flex-col">
            <label htmlFor="">Email</label>
            <input type="text"  className='rounded-[10px] border-2 border-black'/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input type="text" className='rounded-[10px] border-2 border-black' />
          </div>

          <button className='border-black border-2 p-[10px] px-[20px] text-[15px] bg-black text-white' onClick={goToAccount}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
