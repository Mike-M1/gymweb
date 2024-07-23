import React from 'react'
import { useState, useLayoutEffect } from 'react';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Navbar from '../../universal_components/Navbar/Navbar';
import "./Account.css";
import Desktop_user_menu from '../../universal_components/user_Menu/Desktop_user_menu';
import Mobile_user_menu from "../../universal_components/user_Menu/Mobile_user_menu";
import Tablet_user_menu from "../../universal_components/user_Menu/Tablet_user_menu";
import { Line } from "react-chartjs-2";
import Chart from './components/Chart';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Footer from '../Landing_Page_Files/components/Footer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function UserAccount() {

  const location = useLocation();
  const {person} = location.state || {}
  const {name} = useParams();



  const lineChartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Steps",
        data: [3000, 5000, 0, 4000, 200, 4000, 10000, 15, 20000],
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  const navigate = useNavigate();

  const goToMetrics = () => {
    navigate("/User/:name/Metrics");
  }

  const goToSettings = () => {
    navigate("/User/:name/settings");
  }

  const goToCreateBlog = () => {
    navigate("/User/:name/BlogCreation")
  }
  
  const goToTestimonialManage = () => {
    navigate("/User/:name/TestimonialManagement");
  }

  const goToBlogs = () => {
    navigate("/Blogs")
  }

  const goToChangeMetrics = () => {
    navigate("/User/:name/ChangeMetrics");
  }

  const goToManageTrainer = () => {
    navigate("/User/:name/UpdateTrainer=:trainer");
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

     const options = {};

  return (
    <div id="outer" className="">
      <Navbar />

      <div
        id="child1"
        className="flex w-screen flex-col justify-center gap-[40px] items-center "
      >
        <h1 className="font-heading tracking-[2px] text-[30px]" id="username">
          {`Welcome Back ${person.name}`}
        </h1>

        <div
          id="main1"
          className="flex flex-col h-fit gap-[30px] justify-between items-center"
        >
          {/* <div id="sidebar" className="flex flex-col font-heading">
            <button onClick={goToMetrics}>Metrics</button>
            <button onClick={goToChangeMetrics}>Change Metrics</button>
            <button onClick={goToTestimonialManage}>Testimonial Management</button>
            <button onClick={goToBlogs}>Blogs</button>
            <button onClick={goToCreateBlog}>Create Blog</button>
            <button onClick={goToManageTrainer}>Manage Trainer Profile</button>

            <button onClick={goToSettings}>Settings</button>
          </div> */}

            <Chart/>
          <div id="content" className="flex flex-row gap-[40px]">
            <ComptoRender info={name} />
            <div id="contentgrid">
              <div id="sprint">Sprint</div>
              <div id="lift">Lift</div>
              <div id="jump">Jump</div>
              <div id="mile">Mile</div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
