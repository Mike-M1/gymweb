import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import "../styles/Account.css";

export default function UserAccount() {


  const navigate = useNavigate();

  const goToMetrics = () => {
    navigate("/User=:name/Metrics");
  }

  const goToSettings = () => {
    navigate("/User=:name/settings");
  }

  const goToCreateBlog = () => {
    navigate("/User=:name/BlogCreation")
  }
  
  const goToTestimonials = () => {
    navigate("/Testimonials/:id");
  }

  return (
    <div id="outer" className="">
      <Navbar />

      <div id="child1" className="flex w-screen flex-col justify-center gap-[40px] items-center ">
        <h1 className="font-heading tracking-[2px] text-[30px]">
          {"Welcome Back (Insert Name)"}
        </h1>

        <div id="main1" className="flex flex-row w-fit gap-[30px] justify-between items-center">
          <div id="sidebar" className="flex flex-col font-heading">
            <button onClick={goToMetrics}>Metrics</button>
            <button onClick={goToTestimonials}>Testimonial</button>
            <button onClick={goToCreateBlog}>Create Blog</button>
            <button onClick={goToSettings}>Settings</button>
          </div>

          <div id="content" className="flex flex-col gap-[40px]">
            <div id="chart">Chart</div>
            <div id="contentgrid">
              <div>stuff 1</div>
              <div>stuff 2</div>
              <div>stuff 3</div>
              <div>stuff 4</div>
              <div>stuff 5</div>
              <div>stuff 6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
