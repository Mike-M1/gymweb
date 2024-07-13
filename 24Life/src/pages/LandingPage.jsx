import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/LandingPage.css"
import photo1 from "../assets/skyline.jpeg"
import Jacksonville from "../assets/jacksonville.jpg"
import MIT from "../assets/MIT.png"
import Oregon from "../assets/oregon.png"
import Logo from "../assets/24Life.jpeg"
import Navbar from '../components/Navbar'
import { useEffect, useState, useLayoutEffect } from 'react'
import Mobile_Navbar from '../components/mobile_components/Mobile_Navbar.jsx'
import Desktop_Navabr from "../components/desktop_components/Desktop_Navbar.jsx"
import Tablet_Navbar from "../components/tablet_components/Tablet_Navbar.jsx"

export default function LandingPage() {
  let [Iwidth, setIwidth] = useState(window.innerWidth)
    useLayoutEffect(() => {
      console.log("Current Screen Width is: ", Iwidth)
    }, [Iwidth])
  let resize1 = () => setIwidth(window.innerWidth);
  window.addEventListener('resize',resize1 )
  
  

    let ComptoRender;

    if(Iwidth <= 767){
      ComptoRender = Mobile_Navbar
    } else if (Iwidth >= 768 && Iwidth <= 1919){
      ComptoRender = Tablet_Navbar
    } else if (Iwidth >= 1920){
      ComptoRender = Desktop_Navabr
    }


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
        <ComptoRender />

        <div id="herocontent" className="">
          <div id="actcontent" className="text-white gap-[20px]">
            <h1
              className="text-[40px] text-black font-heading"
              onClick={() => {
                console.log(window.innerWidth);
              }}
            >
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
        className="flex flex-col py-[20px] justify-around items-center gap-[20px] pb-[50px]"
      >
        <h1 className="font-heading" id="text1">
          The Only Way To Get Results
        </h1>
        <h2 className="font-body text-[4vw]" id="text2">
          See What Your Results Could Be!
        </h2>
        <button
          onClick={goToTestimonials}
          className="border-black border-2  p-[10px] font-heading "
          id="testimonialbtn"
        >
          Testimonials
        </button>
      </div>

      <div
        id="ExtraSocialProof"
        className="flex flex-col justify-between items-center w-full py-[10px]"
      >
        <h1 className="font-heading text-[20px] mb-[10px]" id="plans2">
          Our Athletes Have Attended:
        </h1>
        <div
          id="scroller"
          className="flex flex-row justify-between items-center gap-[1vw] px-[20px] mb-[20px]"
        >
          <div className="text-black text-[20px] flex flex-col justify-center items-center border-black border-2 h-[20px] w-[20px] p-5 rounded-[500px]">
            {"<"}
          </div>
          <div
            id="college"
            className="flex flex-col justify-center items-center"
          >
            <img
              id="img1"
              src={Jacksonville}
              alt=""
              className="w-[90%] h-[90%] rounded-[50%] "
            />
            <p className="font-heading" id="caption">
              Jacksonville
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center "
            id="college"
          >
            <img
              id="img1"
              src={MIT}
              alt=""
              className="w-[90%] h-[90%] rounded-[50%]"
            />
            <p className="font-heading" id="caption">
              MIT
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center  "
            id="college"
          >
            <img
              id="img1"
              src={Oregon}
              alt=""
              className="w-[90%] h-[90%] rounded-[50%]"
            />
            <p className="font-heading" id="caption">
              Oregon
            </p>
          </div>
          <div className="text-black text-[20px] flex flex-col justify-center items-center border-black border-2 h-[20px] w-[20px] p-5 rounded-[500px]">
            {">"}
          </div>
        </div>
      </div>

      <div id="Plans" className="flex flex-col gap-[20px] pt-[50px] bg-white">
        <h1 className="font-heading text-[30px]" id="plans1">
          Plans
        </h1>
        <div className="flex flex-col items-center ">
          <div className="flex flex-row gap-[10px] py-[20px]">
            <h1 className="font-heading text-[30px]" id="plans2">
              In Home
            </h1>
            <h1 className="font-heading text-[30px]" id="plans2">
              In Gym
            </h1>
          </div>
          <div className=" w-fit gap-[30px]" id="PlanCards">
            <div
              className="w-[200px] h-[250px] border-black border-2 flex flex-col justify-center items-center"
              id="cardplan"
            >
              <p id="session" className="font-heading">
                1 Session
              </p>
              <div className="w-[70px] h-[1px] bg-black "></div>
              <p id="price" className="font-body">
                $350
              </p>

              <p id="session" className="font-heading">
                Per Session
              </p>
            </div>
            <div
              className="w-[200px] h-[250px] border-black border-2 flex flex-col justify-center items-center"
              id="cardplan"
            >
              <p id="session" className="font-heading">
                8 Sessions
              </p>
              <div className="w-[70px] h-[1px] bg-black "></div>
              <p id="price" className="font-body">
                $325
              </p>

              <p id="session" className="font-heading">
                Per Session
              </p>
            </div>
            <div
              className="w-[200px] h-[250px] border-black border-2 flex flex-col justify-center items-center"
              id="cardplan"
            >
              <p id="session" className="font-heading">
                16 Session
              </p>
              <div className="w-[70px] h-[1px] bg-black "></div>
              <p id="price" className="font-body">
                $285
              </p>

              <p id="session" className="font-heading">
                Per Session
              </p>
            </div>
          </div>
          <div>
            <button className="border-2 border-black rounded-[0px] p-[20px] mt-[20px]" id="planbtn">
              More Plans
            </button>
          </div>
        </div>
      </div>

      <div id="CTA" className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-10 h-fit bg-white w-fit py-[40px] px-[20px] rounded-[10px]" id="ctacard">
          <div className="flex flex-col gap-[10px] justify-center ">
            <h1 className="font-heading tracking-[4px] text-[30px]">
              Sign Up With Us
            </h1>
            <div id="hr" className="color-black" />
            <p className="font-body text-[15px] tracking-[1px]">
              Something something extra stuff
            </p>
          </div>
          <div className="flex flex-col" id="inputbtn">
            <input
              type="text"
              className="border-black border-2 rounded-[10px] p-[10px]"
              placeholder="Email"
              id='email'
            />
            <button className="text-white bg-black my-[10px] py-[5px]" id='btn'>
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
