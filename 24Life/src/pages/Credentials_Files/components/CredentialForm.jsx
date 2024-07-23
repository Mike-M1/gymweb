import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "../Credentials.css"
import axios from "axios"

export default function CredentialForm() {

  let [password, setPassword] = useState(null)
  let [email, setEmail] = useState(null)

  const navigate = useNavigate();

  const  goToAccount = async () => {
    let response =await axios.post("http://localhost:3001/Users/FindUser", {password, email})

    console.log(response)

    if (response.data.data == null) {
      console.log("Incorrect Credentials")
    }else if(response.data.data != null){
       navigate(`/User/${response.data.data.Email}`, {state: {person: {email, password, name: "Mikal"}}})
    }
   
  }

  return (
    <div className='h-screen bg-slat'>
      <div className="flex flex-col w-screen  h-screen bg-transparent justify-center items-center">
        <div className="flex flex-col gap-[20px] justify-center items-center bg-white p-[20px] py-[50px] px-[30px]" id="form">

          <div className='flex flex-row font-heading gap-[20px] mb-[30px]  text-[40px]'>
            <div>Log In</div>
            <div>Sign Up</div>
          </div>

          <div className=" flex flex-col w-full items-center gap-[10px]">
            <label htmlFor="">Email</label>
            <input type="text"  className='rounded-[10px] border-2 border-black w-[70%] h-[25px]' onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="flex flex-col w-[70%] gap-[10px]">
            <label htmlFor="">Password</label>
            <input type="password" className='rounded-[10px] border-2 border-black h-[25px]' onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <button className='border-black border-2 p-[10px] px-[20px] text-[15px] bg-black text-white' onClick={goToAccount}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
