import React, {useState, useEffect, useLayoutEffect} from "react";
import Navbar from "../../universal_components/Navbar/Navbar";
import "./Trainer.css";
import axios from "axios"
import Trainer_Card from "./components/Trainer_Card";
import { useNavigate } from "react-router-dom";

export default function Testimonials() {
  let [data1, setData1] = useState(null)

  useEffect(()=>{
    const data = async()=> {
      let d1 = await axios.get("http://localhost:3001/Trainers")
      setData1(d1.data)
      console.log(d1.data)
    }
    data()
  }, [])

  const navigate = useNavigate()
  

  return (
    <div className="flex flex-col justify-start h-screen gap-[30px] w-screen">
      <Navbar />
      <h1 className="font-heading" id="traintitle">
        Our Team
      </h1>
      <div className="flex flex-col gap-[10px] items-center">
        {data1
          ? 
              <Trainer_Card data={data1}/>
          : "No Trainers Yet"}
      </div>
    </div>
  );
}
