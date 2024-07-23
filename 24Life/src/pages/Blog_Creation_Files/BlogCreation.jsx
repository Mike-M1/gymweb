import React, { useEffect } from "react";
import {useState} from "react"
import Navbar from "../../universal_components/Navbar/Navbar";
import "../Specific_Testimonials_Files/SpecTest.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SpecificTestimonial() {

  let [BlogTitle, setBlogTitle] = useState(null)
  let [BlogDescription, setBlogDescription] = useState(null);
  let [BlogAuthor, setBlogAuthor] = useState(null)
  let [BlogContent, setBlogContent] = useState(null);




  let {name} = useParams();
  useEffect(()=>{
    setBlogAuthor(name)
  }, [])
  const goToAccount = async () => {

    let blogpost = {
      Title: BlogTitle,
      Author: BlogAuthor,
      Description: BlogDescription,
      Content: BlogContent,
    }

    let response = await axios.post("http://localhost:3001/Blogs1/CreateBlog", blogpost)
    console.log(response)
  };

  return (
    <div id="outer">
      <Navbar />
      <div>


        <div className="flex flex-col gap-[20px] font-body">

          <div className="flex flex-col items-center gap-[10px]">
            <label htmlFor="">Title</label>
            <input type="text" className="border-black border-2  w-[250px] h-[30px]"  onChange={(e) => {setBlogTitle(e.target.value)}}/>
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <label htmlFor="">Blog Description/TLDR</label>
            <input type="text" className="border-black border-2  w-[250px] h-[30px]" onChange={(e) => {setBlogDescription(e.target.value)}}/>
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <label htmlFor="">Blog Content</label>
            <textarea type="text" className="border-black border-2  w-[500px] min-h-[200px]" onChange={(e) => {setBlogContent(e.target.value)}}/>
          </div>

          <button type="button" onClick={goToAccount} className="border-black border-2 p-[10px]">
            Done?
          </button>

        </div>
      </div>
    </div>
  );
}
