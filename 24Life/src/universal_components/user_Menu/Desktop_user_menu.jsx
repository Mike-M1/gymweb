import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Desktop_user_menu() {


      const navigate = useNavigate();

      const goToMetrics = () => {
        navigate("/User/:name/Metrics");
      };

      const goToSettings = () => {
        navigate("/User/:name/settings");
      };

      const goToCreateBlog = () => {
        navigate("/User=:name/BlogCreation");
      };

      const goToTestimonialManage = () => {
        navigate("/User/:name/TestimonialManagement");
      };

      const goToBlogs = () => {
        navigate("/Blogs");
      };

      const goToChangeMetrics = () => {
        navigate("/User/:name/ChangeMetrics");
      };

      const goToManageTrainer = () => {
        navigate("/User/:name/UpdateTrainer/:trainer");
      };

  return (
    <div>
      <div
        id="sidebar"
        className="flex flex-col font-heading"
      >
        <button onClick={goToMetrics}>Metrics</button>
        <button onClick={goToChangeMetrics}>Change Metrics</button>
        <button onClick={goToTestimonialManage}>Testimonial Management</button>
        <button onClick={goToBlogs}>Blogs</button>
        <button onClick={goToCreateBlog}>Create Blog</button>
        <button onClick={goToManageTrainer}>Manage Trainer Profile</button>

        <button onClick={goToSettings}>Settings</button>
      </div>
    </div>
  );
}
