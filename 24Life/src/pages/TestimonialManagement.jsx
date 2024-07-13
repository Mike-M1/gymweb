import React from "react";
import Navbar from "../components/Navbar";
import "../styles/SpecTest.css";
import { useNavigate } from "react-router-dom";

export default function SpecificTestimonial() {
  const navigate = useNavigate();
  const goToAccount = () => {
    navigate("/User=:name");
  };

  return (
    <div id="outer">
      <Navbar />
      <div>
        <div id="testvis" className="border-2 border-black w-[70vw] my-[20px] mx-auto ">
          <img src="" alt="" />
          <video src=""></video>
          <p>Select Video or Picture</p>
        </div>

        <div className="flex flex-col gap-[20px] font-body">
          <div className="flex flex-col items-center gap-[10px]">
            <label htmlFor="">Name</label>
            <input type="text" className="border-black border-2  w-[200px]" />
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <label htmlFor="">Goals in Training</label>
            <input type="text" className="border-black border-2  w-[200px]" />
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <label htmlFor="">Testimonial Content</label>
            <input type="text" className="border-black border-2  w-[200px]" />
          </div>

          <button type="button" onClick={goToAccount}>
            Done?
          </button>
        </div>
      </div>
    </div>
  );
}
