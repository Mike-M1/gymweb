import React from "react";
import Navbar from "../../universal_components/Navbar/Navbar";
import "../Specific_Testimonials_Files/SpecTest.css"
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
        <div id="testvis">
          <img src="" alt="" />
          <video src=""></video>
        </div>

        <div className="flex flex-col gap-[20px] font-body">
          <div className="flex flex-col items-center gap-[10px]">
            <label htmlFor="">Change Name</label>
            <input type="text" className="border-black border-2  w-[200px]" />
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <label htmlFor="">Change Sport/Activity</label>
            <input type="text" className="border-black border-2  w-[200px]" />
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <label htmlFor=""></label>
            <input type="text" className="border-black border-2  w-[200px]" />
          </div>

          <button type="button" onClick={goToAccount}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
