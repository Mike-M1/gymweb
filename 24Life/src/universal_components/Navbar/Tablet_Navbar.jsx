import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/24Life.jpeg";
import "./Navbar.css"

export default function Tablet_Navbar() {
  const navigate = useNavigate();
  const goToCredentials = () => {
    navigate("/Credentials");
  };
  const goToTrainers = () => {
    navigate("/Trainers");
  };
  const goToPlans = () => {
    navigate("/Plans");
  };

  const goToTestimonials = () => {
    navigate("/Testimonials");
  };

  
      const goToHome = () => {
        navigate("/");
      };

  return (
    <div id="navbar2" className="py-[15px]">
      <button
        type="button"
        id="btn"
        className="navbtn w-fit font-heading tracking-[5px] flex flex-row justify-center items-center"
        onClick={goToTrainers}
      >
        Trainers
      </button>
      <button
        type="button"
        id="btn"
        className="navbtn font-heading tracking-[5px] w-fit"
        onClick={goToPlans}
      >
        Services
      </button>
      <img
        src={Logo}
        onClick={goToHome}
        id="icon"
        alt=""
        className="w-[90px] rounded-[150px] border-black border-2 h-[100px]"
      />
      <button
        type="button"
        className="navbtn font-heading tracking-[5px] w-fit "
        id="btn"
        onClick={goToTestimonials}
      >
        Testimonials
      </button>
      <button
        type="button"
        className="navbtn font-heading tracking-[5px]"
        id="btn"
        onClick={goToCredentials}
      >
        Log In/Sign Up
      </button>
    </div>
  );
}
