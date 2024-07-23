import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../universal_components/Navbar/Navbar";
import "./Blogs.css";
import axios from "axios"

export default function Blogs() {
  let [data1, setData1] = useState(null)

  useEffect(() => {
   axios.get("http://localhost:3001/Blogs1").then((data) => {setData1(data.data)})
   
  }, [])

  const navigate = useNavigate();

  const goToSpecificBlog = () => {
    navigate("/Blogs/:id");
  };

  return (
    <div className="flex flex-col justify-start h-screen gap-[30px] w-screen">
      <Navbar />
      <h1 className="font-heading text-[20px]">Blog Posts</h1>
      <div className="flex flex-col gap-[30px] items-center ">

{/* 
        <div id="testi" onClick={goToSpecificBlog}>
          <div id="pic">
            <img src alt="" />
            Image
          </div>
          <div id="summary">
            <h3 className="font-heading " id="heading">
              Blog Title
            </h3>
            <h3 className="font-heading " id="heading2">
              Author
            </h3>
            <h3 className="font-body text-[30px]" id="body">
              Description
            </h3>
          </div>
        </div> */}

        {data1? (data1.map((Blogs)=> ( <div id="testi" onClick={goToSpecificBlog} key={Blogs._id}>
          <div id="pic">
            <img src alt="" />
            Image
          </div>
          <div id="summary">
            <h3 className="font-heading " id="heading">
              {Blogs.Title}
            </h3>
            <h3 className="font-heading " id="heading2">
              {Blogs.Author}
            </h3>
            {/* <h3 className="font-body text-[30px]" id="body">
              {Blogs.}
            </h3> */}
          </div>
        </div>))): ""}

        




        
{/* 
        <div id="testi">
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

        <div id="testi">
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

        <div id="testi">
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

        <div id="testi">
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
        </div> */}
      </div>
    </div>
  );
}
