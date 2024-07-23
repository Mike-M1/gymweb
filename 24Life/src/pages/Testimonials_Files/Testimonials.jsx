import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../universal_components/Navbar/Navbar'
import "./Testimonials.css"
import axios from "axios"


export default function Testimonials() {

  let [data1, setData] = useState(null)
  useEffect(() =>{
    axios.get("http://localhost:3001/Testimonials").then((data)=>{setData(data.data)})
  }, [])

  const navigate = useNavigate();

  const goToSpecificTest =() => {
    navigate("/Testimonials/:id")
  }


  return (
    <div className="flex flex-col justify-start h-screen gap-[30px] w-screen">
      <Navbar />
      <h1 className="font-heading" id="title">
        Testimonials
      </h1>
      <div className="flex flex-col gap-[30px] items-center">


      { data1 ?
        data1.map((Testimonials) => (<div id="testi" onClick={goToSpecificTest} key={Testimonials._id}>
          <div id="pic">
            <img  alt="" />
            Image
          </div>
          <div id="summary">
            <h3 className="font-heading " id="heading">
              {`${Testimonials.Name}'s testimonial`}
            </h3>
            <h3 className="font-heading " id="heading">
              Goal in Training: {Testimonials.Goal_In_Training}
            </h3>
            <h3 className="font-body text-[30px]" id="body">
              {Testimonials.Content}
            </h3>
          </div>
        </div>)): "No Data"
      }

        

        {/* <div id="testi" onClick={goToSpecificTest}>
          <div id="pic">
            <img alt="" />
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

        <div id="testi" onClick={goToSpecificTest}>
          <div id="pic">
            <img alt="" />
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

        <div id="testi" onClick={goToSpecificTest}>
          <div id="pic">
            <img alt="" />
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

        <div id="testi" onClick={goToSpecificTest}>
          <div id="pic">
            <img  alt="" />
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
