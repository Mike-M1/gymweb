import React from "react";
import Navbar from "../../universal_components/Navbar/Navbar";
import "../Specific_Blog_Files/SpecBlog.css";
import { useNavigate, useLocation } from "react-router-dom";


export default function SpecificTestimonial() {
  const navigate = useNavigate();
    const location = useLocation();
    const { data } = location.state || {};


  return (
    <div id="outer">
      <Navbar />
      {data ? (
        <>
          <h1 className="font-heading" id="blogtitle">
            Trainer: {data[0].Name}
          </h1>
          <div>
            <div
              id="blogvis"
              onClick={console.log(data)}
              className="border-2 border-black "
            >
              <img src="" alt="" />
              <video src=""></video>
              <p>Video or Image</p>
            </div>

            <div className="flex flex-col gap-[20px] font-body">
              <div className="flex flex-col items-center gap-[10px]">
                <h1 htmlFor="" className="font-body" id="content">
                  Expertise
                </h1>
                <p type="text" className="border-black border-2  w-[200px]">{data[0].Expertise}</p>
              </div>

              <div className="flex flex-col items-center gap-[10px]">
                <h1 htmlFor="" className="font-body" id="content">Blurb</h1>
                <p type="text" className="border-black border-2  w-[200px]">{data[0].Blurb}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        "No Data"
      )}
      {/* <h1 className="font-heading" id="blogtitle">
        Trainer: Xavier
      </h1>
      <div>
        <div id="blogvis" className="border-2 border-black ">
          <img src="" alt="" />
          <video src=""></video>
          <p>Video or Image</p>
        </div>

        <div className="flex flex-col gap-[20px] font-body">
          <div className="flex flex-col items-center gap-[10px]">
            <h1 htmlFor="" className="font-body" id="content">
              Expertise
            </h1>
            <p type="text" className="border-black border-2  w-[200px]" />
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <h1 htmlFor="" className="font-body" id="content">
              Blurp
            </h1>
            <p type="text" className="border-black border-2  w-[200px]" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
