import {React, useState} from 'react'
import { useNavigate,  } from "react-router-dom";
import Logo from "../../assets/24Life.jpeg";
import "./MobileNavbar.css"

export default function Mobile_Navbar() {

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

      const [isMenuOpen, setIsMenuOpen] = useState(false)

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log(isMenuOpen)
      }

  return (
    <div id="navbar" className="">
      <div className={`menu ${isMenuOpen ? "open" : ""} flex flex-col items-center gap-[10px] py-[10px]`} onClick={toggleMenu}>
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

      <img
        src={Logo}
        alt=""
        className="w-[90px] rounded-[150px] border-black border-2 h-[100px]"
        onClick={toggleMenu}
      />
    </div>
  );
}
