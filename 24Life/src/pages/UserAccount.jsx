import React from 'react'
import { useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import "../styles/Account.css";
import Desktop_user_menu from '../components/desktop_components/Desktop_user_menu';
import Mobile_user_menu from '../components/mobile_components/Mobile_user_menu';
import Tablet_user_menu from '../components/tablet_components/Tablet_user_menu';


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
  
  const goToTestimonialManage = () => {
    navigate("/User=:name/TestimonialManagement");
  }

  const goToBlogs = () => {
    navigate("/Blogs")
  }

  const goToChangeMetrics = () => {
    navigate("/User=:name/ChangeMetrics");
  }

  const goToManageTrainer = () => {
    navigate("/User=:name/UpdateTrainer=:trainer");
  }

    let [Iwidth, setIwidth] = useState(window.innerWidth);
    useLayoutEffect(() => {
      console.log("Current Screen Width is: ", Iwidth);
    }, [Iwidth]);
    let resize1 = () => setIwidth(window.innerWidth);
    window.addEventListener("resize", resize1);
  
    let ComptoRender;

     if (Iwidth <= 767) {
       ComptoRender = Mobile_user_menu;
     } else if (Iwidth >= 768 && Iwidth <= 1919) {
       ComptoRender = Desktop_user_menu;
     } else if (Iwidth >= 1920) {
       ComptoRender = Desktop_user_menu;
     }



  return (
    <div id="outer" className="">
      <Navbar />

      <div id="child1" className="flex w-screen flex-col justify-center gap-[40px] items-center ">
        <h1 className="font-heading tracking-[2px] text-[30px]" id="username">
          {"Welcome Back (Insert Name)"}
        </h1>

        <div id="main1" className="flex flex-col h-fit gap-[30px] justify-between items-center">
          {/* <div id="sidebar" className="flex flex-col font-heading">
            <button onClick={goToMetrics}>Metrics</button>
            <button onClick={goToChangeMetrics}>Change Metrics</button>
            <button onClick={goToTestimonialManage}>Testimonial Management</button>
            <button onClick={goToBlogs}>Blogs</button>
            <button onClick={goToCreateBlog}>Create Blog</button>
            <button onClick={goToManageTrainer}>Manage Trainer Profile</button>

            <button onClick={goToSettings}>Settings</button>
          </div> */}
          
            <div id="chart" >Chart</div>
            <div id="content" className="flex flex-row gap-[40px]">
            <ComptoRender/>
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
