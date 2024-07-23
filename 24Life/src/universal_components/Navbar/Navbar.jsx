import React, {useState, useEffect, useLayoutEffect} from 'react'
import { useNavigate} from "react-router-dom";
import Logo from "../../assets/24Life.jpeg";
import Mobile_Navbar from "./Mobile_Navbar"
import Tablet_Navbar from "./Tablet_Navbar"
import Desktop_Navbar from "./Desktop_Navbar"
import "./Navbar.css"

export default function Navbar() {

    let [Iwidth, setIwidth] = useState(window.innerWidth);
    useLayoutEffect(() => {
      console.log("Current Screen Width is: ", Iwidth);
    }, [Iwidth]);
    let resize1 = () => setIwidth(window.innerWidth);
    window.addEventListener("resize", resize1);



  return (
    <div id="navbar1" className="py-[15px] w-full">
      {Iwidth == null || Iwidth == 0 ? "Nothing"
      : Iwidth <= 767 ? 
        (<Mobile_Navbar/>) 
      : Iwidth >= 768 && Iwidth <= 1919 ? 
        (<Tablet_Navbar/>) 
      : Iwidth >= 1920 ? (<Desktop_Navbar/>) : "Nothing"}
    </div>
  );
}

{/* <button
        type="button"
        className="navbtn w-fit font-heading tracking-[5px] flex flex-row justify-center items-center"
        onClick={goToTrainers}
      >
        Trainers
      </button>
      <button
        type="button"
        className="navbtn font-heading tracking-[5px] w-fit"
        onClick={goToPlans}
      >
        Services
      </button>
      <img
        src={Logo}
        alt=""
        className="w-[90px] rounded-[150px] border-black border-2 h-[100px]"
      />
      <button
        type="button"
        className="navbtn font-heading tracking-[5px] w-fit "
        onClick={goToTestimonials}
      >
        Testimonials
      </button>
      <button
        type="button"
        className="navbtn font-heading tracking-[5px]"
        onClick={goToCredentials}
      >
        Log In or Sign Up
      </button> */}

