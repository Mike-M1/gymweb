import React, {useState} from "react";
import Navbar from "../../universal_components/Navbar/Navbar";
import "../Specific_Testimonials_Files/SpecTest.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


export default function SpecificTestimonial() {
  let {name} = useParams();
  let [goals, setGoals] = useState(null);
  let [content, setContent] = useState(null);
  const navigate = useNavigate();
  const goToAccount = async () => {
    let Testimonial ={
      Name: name,
      Goal_In_Training: goals,
      Content: content,
    }
    let response = await axios.post("http://localhost:3001/Testimonials/CreateTestimonialProfile", Testimonial)
    console.log(response)
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
            <label htmlFor="">Goals in Training</label>
            <input type="text" className="border-black border-2  w-[200px]" onChange={(e)=> {setGoals(e.target.value)}} />
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <label htmlFor="">Testimonial Content</label>
            <input type="text" className="border-black border-2  w-[200px]" onChange={(e) => {setContent(e.target.value)}} />
          </div>

          <button type="button" onClick={goToAccount}>
            Done?
          </button>

        </div>
      </div>
    </div>
  );
}
