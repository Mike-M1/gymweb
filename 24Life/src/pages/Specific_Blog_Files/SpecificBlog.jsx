import React from "react";
import Navbar from "../../universal_components/Navbar/Navbar";
import "./SpecBlog.css";
import { useNavigate } from "react-router-dom";

export default function SpecificTestimonial() {
  const navigate = useNavigate();

  return (
    <div id="outer">
      <Navbar />
      <h1 className="font-heading" id="blogtitle">Blog 1: How to Get Swole</h1>
      <div>
        <div id="blogvis" className="border-2 border-black ">
          <img src="" alt="" />
          <video src=""></video>
          <p>Video or Image</p>
        </div>

        <div className="flex flex-col gap-[20px] font-body">
          <div className="flex flex-col items-center gap-[10px]">
            <h1 htmlFor="" className="font-heading" id="blogtitle">
              Name
            </h1>
            <p
              type="text"
              className="border-black border-2  w-[200px] font-body"
            />
          </div>

        
          <div className="flex flex-col items-center gap-[10px]">
            <h1 htmlFor="" className="font-body" id="content">
              Blog Content
            </h1>
            <p type="text" className="border-black border-2  w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
