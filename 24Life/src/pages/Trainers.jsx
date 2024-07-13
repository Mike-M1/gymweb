import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Testimonials.css";
import "../styles/Trainer.css"

export default function Testimonials() {
  const navigate = useNavigate();

  const goToSpecificBlog = () => {
    navigate("/Trainer=:trainer");
  };

  return (
    < div className="flex flex-col justify-start h-screen gap-[30px] w-screen">
      <Navbar />
      <h1 className="font-heading" id="traintitle">Our Team</h1>
      <div className="flex flex-col gap-[10px] items-center">

         <div id="testi" onClick={goToSpecificBlog} >
          <div id="pic">
            <img src alt="" />
            Image
          </div>
          <div id="summary">
            <h3 className="font-heading " id="heading">
              Laura's Testimony
            </h3>
            <h3 className="font-heading " id="heading">
              author
            </h3>
            <h3 className="font-body text-[30px]" id="body">
              description
            </h3>
          </div>
        </div>

        <div id="testi" onClick={goToSpecificBlog} >
          <div id="pic">
            <img src alt="" />
            Image
          </div>
          <div id="summary">
            <h3 className="font-heading " id="heading">
              Laura's Testimony
            </h3>
            <h3 className="font-heading " id="heading">
              author
            </h3>
            <h3 className="font-body text-[30px]" id="body">
              description
            </h3>
          </div>
        </div>

        <div id="testi" onClick={goToSpecificBlog} >
          <div id="pic">
            <img src alt="" />
            Image
          </div>
          <div id="summary">
            <h3 className="font-heading " id="heading">
              Laura's Testimony
            </h3>
            <h3 className="font-heading " id="heading">
              author
            </h3>
            <h3 className="font-body text-[30px]" id="body">
              description
            </h3>
          </div>
        </div>

        <div id="testi" >
          <div id="pic">
            <img src alt="" />
            Image
          </div>
          <div id="summary">
            <h3 className="font-heading " id="heading">
              Laura's Testimony
            </h3>
            <h3 className="font-heading " id="heading">
              author
            </h3>
            <h3 className="font-body text-[30px]" id="body">
              description
            </h3>
          </div>
        </div>

        <div id="testi" >
          <div id="pic">
            <img src alt="" />
            Image
          </div>
          <div id="summary">
            <h3 className="font-heading " id="heading">
              Laura's Testimony
            </h3>
            <h3 className="font-heading " id="heading">
              author
            </h3>
            <h3 className="font-body text-[30px]" id="body">
              description
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
}
