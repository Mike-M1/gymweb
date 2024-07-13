import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Mobile_menu.css"

export default function Mobile_user_menu() {

    let [toggle, setToggle] = useState(false)

  const navigate = useNavigate();

  const goToMetrics = () => {
    navigate("/User=:name/Metrics");
  };

  const goToSettings = () => {
    navigate("/User=:name/settings");
  };

  const goToCreateBlog = () => {
    navigate("/User=:name/BlogCreation");
  };

  const goToTestimonialManage = () => {
    navigate("/User=:name/TestimonialManagement");
  };

  const goToBlogs = () => {
    navigate("/Blogs");
  };

  const goToChangeMetrics = () => {
    navigate("/User=:name/ChangeMetrics");
  };

  const goToManageTrainer = () => {
    navigate("/User=:name/UpdateTrainer=:trainer");
  };

   const toggleMenu = () => {
     setToggle(!toggle);
     console.log(toggle)
   };
  return (
    <div>
      <div id="sidebar" className={`flex flex-col font-heading ${toggle? "menuon": "menuoff"}`} onClick={toggleMenu}>
            <button onClick={goToMetrics}>Metrics</button>
            <button onClick={goToChangeMetrics}>Change Metrics</button>
            <button onClick={goToTestimonialManage}>Testimonial Management</button>
            <button onClick={goToBlogs}>Blogs</button>
            <button onClick={goToCreateBlog}>Create Blog</button>
            <button onClick={goToManageTrainer}>Manage Trainer Profile</button>

            <button onClick={goToSettings}>Settings</button>
          </div>

      <button className={`border-black border-2 p-[10px] ${toggle? "menu1": "menu0" }`} onClick={toggleMenu}>Menu</button>
    </div>
  );
}
