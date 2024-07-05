import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/LandingPage.css"
import photo1 from "../assets/skyline.jpeg"
import Jacksonville from "../assets/jacksonville.jpg"
import MIT from "../assets/MIT.png"
import Oregon from "../assets/oregon.png"
import Logo from "../assets/24Life.jpeg"
import Navbar from '../components/Navbar'

export default function LandingPage() {



  const navigate =  useNavigate();
  const goToCredentials = () => {
    navigate("/Credentials")
  }
  const goToTrainers = () => {
    navigate("/Trainers")
  }
  const goToPlans = () => {
    navigate("/Plans")
  }
  
  const goToTestimonials = () => {
    navigate("/Testimonials");
  }


  return (
    <div className="flex flex-col" id="main">
      <div id="Hero" className="bg-transparent">
        <Navbar/>

        <div id="herocontent" className="">
          <div id="actcontent" className="text-white gap-[20px] h-max">
            <h1 className="text-[40px] text-black font-heading">
              Train Like An Athlete
            </h1>
            <p className="text-[20px] font-body">You Will Get Results!</p>
            <button className="border-2 border-black p-[10px] bg-white text-black font-heading">
              Get Your Results
            </button>
          </div>
        </div>
      </div>

      <div
        id="SocialProof"
        className="flex flex-col py-[10px] justify-around items-center gap-[20px] pb-[50px]"
      >
        <h1 className="font-heading">The Only Way To Get Results</h1>
        <h2 className="font-body">See What Your Results Could Be!</h2>
        <button onClick={goToTestimonials} className="border-black border-2 w-fit p-[10px] font-heading">
          Testimonials
        </button>
      </div>

      <div
        id="ExtraSocialProof"
        className="flex flex-col justify-between items-center w-full"
      >
        <h1 className="font-heading text-[20px] mb-[10px]">
          Our Athletes Have Attended:
        </h1>
        <div className="flex flex-row justify-between items-center w-fit gap-[70px] px-[20px] mb-[20px]">
          <div className="text-black text-[20px] flex flex-col justify-center items-center border-black border-2 h-[20px] w-[20px] p-5 rounded-[500px]">
            {"<"}
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={Jacksonville}
              alt=""
              className="w-[150px] h-[150px] rounded-[100px] border-black border-2 p-[10px]"
            />
            <p className="font-heading">Jacksonville</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={MIT}
              alt=""
              className="w-[150px] h-[150px] rounded-[100px] border-black border-2 p-[10px]"
            />
            <p className="font-heading">MIT</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={Oregon}
              alt=""
              className="w-[150px] h-[150px] rounded-[100px] border-black border-2 p-[10px]"
            />
            <p className="font-heading">UNC</p>
          </div>
          <div className="text-black text-[20px] flex flex-col justify-center items-center border-black border-2 h-[20px] w-[20px] p-5 rounded-[500px]">
            {">"}
          </div>
        </div>
      </div>

      <div id="Plans" className="flex flex-col gap-[20px] pt-[50px] bg-white">
        <h1 className="font-heading text-[30px]">Plans</h1>
        <div className="flex flex-col items-center ">
          <div className="flex flex-row gap-[10px] py-[20px]">
            <h1 className="font-heading text-[30px]">In Home</h1>
            <h1 className="font-heading text-[30px]">In Gym</h1>
          </div>
          <div className=" w-fit gap-[20px]" id="PlanCards">
            <div className="w-[200px] h-[250px] text-white  bg-black">
              Plan 1
            </div>
            <div className="w-[200px] h-[250px] text-white bg-black">
              {" "}
              Plan 2
            </div>
            <div className="w-[200px] h-[250px] text-white bg-black">
              Plan 3
            </div>
          </div>
        </div>
      </div>

      <div id="CTA" className='flex flex-col justify-center items-center'>
        <div
          className="flex flex-row justify-center items-center gap-10 h-fit bg-white w-fit py-[40px] px-[20px] rounded-[10px]"
        >
          <div className="flex flex-col gap-[10px] justify-center ">
            <h1 className='font-heading tracking-[4px] text-[30px]'>Sign Up With Us</h1>
            <div id="hr" className="color-black" />
            <p className='font-body text-[15px] tracking-[1px]'>Something something extra stuff</p>
          </div>
          <div className="flex flex-col">
            <input type="text" className='border-black border-2 rounded-[10px] p-[10px]' placeholder='Email' />
            <button className="text-white bg-black my-[10px] py-[5px]">
              {"Let's Do This"}
            </button>
          </div>
        </div>
      </div>
      <div
        id="Footer"
        className="flex flex-col items-center gap-[20px] bg-white py-[20px]"
      >
        <div id="socialinks" className="flex flex-row gap-[30px]">
          {/* <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /> */}
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
        <h1>Copyright Stuff</h1>
        <h1>Some Legal Stuff</h1>
      </div>
    </div>
  );
}
