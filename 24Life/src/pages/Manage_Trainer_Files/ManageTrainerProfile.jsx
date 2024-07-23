import React, {useState} from "react";
import Navbar from "../../universal_components/Navbar/Navbar";
import "../Specific_Testimonials_Files/SpecTest.css";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"


export default function SpecificTestimonial() {

  let {name} = useParams();
  let [expertise, setExpertise] = useState(null)
  let [blurb, setBlurb] = useState(null)
  let [services, setServices] = useState(null)
  const navigate = useNavigate();
  const goToAccount = async () => {
    let Trainer = {
      Name:name,
      Expertise:expertise,
      Blurb:blurb,
      Services:services,
    }
    let response = await axios.post("http://localhost:3001/Trainers/CreateTrainerProfile", Trainer)
    console.log(response)
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
            <label htmlFor="">Training Expertise</label>
            <input
              type="text"
              className="border-black border-2  w-[200px]"
              onChange={(e) => {
                setExpertise(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <label htmlFor="">Trainer Blurb</label>
            <input
              type="text"
              className="border-black border-2  w-[200px]"
              onChange={(e) => {
                setBlurb(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <label htmlFor="">Trainer Services</label>
            <input
              type="text"
              className="border-black border-2  w-[200px]"
              onChange={(e) => {
                setServices(e.target.value);
              }}
            />
          </div>

          <button type="button" onClick={goToAccount}>
            Confirm Trainer Profile
          </button>
        </div>
      </div>
    </div>
  );
}
