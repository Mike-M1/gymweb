import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/24Life.jpeg";

export default function Desktop_Navbar() {
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

  return (
    <div id="navbar" className="py-[15px] ">
      <button
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
        Log In/Sign Up
      </button>
    </div>
  );
}
