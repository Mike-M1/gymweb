import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Blogs from "./pages/Blogs.jsx";
import Plans from "./pages/Plans.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Trainers from "./pages/Trainers.jsx";
import Credentials from "./pages/Credentials.jsx";
import UserAccount from "./pages/UserAccount.jsx";
import BlogCreation from "./pages/BlogCreation.jsx";
import SpecificBlog from "./pages/SpecificBlog.jsx";
import ManageTrainerProfile from "./pages/ManageTrainerProfile.jsx";
import SpecificTrainer from "./pages/SpecificTrainer.jsx";
import DrawingBoard from "./pages/Drawingboard.jsx"
import Metrics from "./pages/Metrics.jsx";
import ChangeMetrics from "./pages/ChangeMetrics.jsx";
import Settings from "./pages/Settings.jsx";
import SpecificTestimonial from "./pages/SpecificTestimonial.jsx";
import TestimonialManagement from "./pages/TestimonialManagement.jsx";



const router = createBrowserRouter([
  {
    path: "/Drawingboard",
    element: <DrawingBoard/>
  },
  //Page 1: Home Page
  {
    path: "/",
    element: <LandingPage />,
  },
  //Page 2: Blogs Page
  {
    path: "/Blogs",
    element: <Blogs />,
  },
  //Page 3: Plans/Services Page
  {
    path: "/Plans",
    element: <Plans />,
  },
  //Page 4: Testimonials Page
  {
    path: "/Testimonials",
    element: <Testimonials />,
  },
  //Page 5: Trainers Page
  {
    path: "/Trainers",
    element: <Trainers />,
  },
  //Page 6: Log In | Sign Up Page
  {
    path: "/Credentials",
    element: <Credentials />,
  },
  //Page 7: User Account Page
  {
    path: "/User=:name",
    element: <UserAccount />,
  },
  //Page 8: Blog Creation Page
  {
    path: "/User=:name/BlogCreation",
    element: <BlogCreation />,
  },
  //Page 9: Specific Blog Page
  {
    path: "/Blogs/:id",
    element: <SpecificBlog />,
  },
  //Page 10: Manage Trainer Profile Page
  {
    path: "/User=:name/UpdateTrainer=:trainer",
    element: <ManageTrainerProfile />,
  },
  //Page 11: Specific Trainer Page
  {
    path: "/Trainer=:trainer",
    element: <SpecificTrainer />,
  },
  //Page 12: Metrics Page
  {
    path: "/User=:name/Metrics",
    element: <Metrics />,
  },
  //Page 13: Change Metrics Page
  {
    path: "/User=:name/ChangeMetrics",
    element: <ChangeMetrics />,
  },
  //Page 14: Settings Page
  {
    path: "/User=:name/settings",
    element: <Settings />,
  },
  //Page 15: Specific Testimonials Page
  {
    path: "/Testimonials/:id",
    element: <SpecificTestimonial />,
  },
  //Page 16: Testimonials Management Page
  {
    path: "/User=:name/TestimonialManagement",
    element: <TestimonialManagement />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
