import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import "../styles/Plans.css"


export default function Plans() {


  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen w-screen mb-[70px] ">
      <Navbar />

      <div className="flex flex-col w-screen gap-[30px]">
        <div id="ingym">
          <h1 className="font-heading my-[30px]" id="title1">In Gym</h1>
          <div
            className="flex flex-row gap-[20px] items-center justify-center"
            id="ingym1"
          >
            <div
              className="w-[200px] h-[250px] border-black border-2 flex flex-col justify-center items-center"
              id="cardplan"
            >
              <p id="session" className="font-heading">
                1 Session
              </p>
              <div className="w-[70px] h-[1px] bg-black "></div>
              <p id="price" className="font-body">
                $350
              </p>

              <p id="session" className="font-heading">
                Per Session
              </p>
            </div>
            <div
              className="w-[200px] h-[250px] border-black border-2 flex flex-col justify-center items-center"
              id="cardplan"
            >
              <p id="session" className="font-heading">
                1 Session
              </p>
              <div className="w-[70px] h-[1px] bg-black "></div>
              <p id="price" className="font-body">
                $350
              </p>

              <p id="session" className="font-heading">
                Per Session
              </p>
            </div>
            <div
              className="w-[200px] h-[250px] border-black border-2 flex flex-col justify-center items-center"
              id="cardplan"
            >
              <p id="session" className="font-heading">
                1 Session
              </p>
              <div className="w-[70px] h-[1px] bg-black "></div>
              <p id="price" className="font-body">
                $350
              </p>

              <p id="session" className="font-heading">
                Per Session
              </p>
            </div>
          </div>
        </div>

        <div id="inhome" >
          <h1 className="font-heading mb-[30px]" id="title1">In Home</h1>
          <div className="flex flex-row gap-[20px] justify-center" id="inhome1">
            <div
              className="w-[200px] h-[250px] border-black border-2 flex flex-col justify-center items-center"
              id="cardplan"
            >
              <p id="session" className="font-heading">
                1 Session
              </p>
              <div className="w-[70px] h-[1px] bg-black "></div>
              <p id="price" className="font-body">
                $350
              </p>

              <p id="session" className="font-heading">
                Per Session
              </p>
            </div>
            <div
              className="w-[200px] h-[250px] border-black border-2 flex flex-col justify-center items-center"
              id="cardplan"
            >
              <p id="session" className="font-heading">
                1 Session
              </p>
              <div className="w-[70px] h-[1px] bg-black "></div>
              <p id="price" className="font-body">
                $350
              </p>

              <p id="session" className="font-heading">
                Per Session
              </p>
            </div>
            <div
              className="w-[200px] h-[250px] border-black border-2 flex flex-col justify-center items-center"
              id="cardplan"
            >
              <p id="session" className="font-heading">
                1 Session
              </p>
              <div className="w-[70px] h-[1px] bg-black "></div>
              <p id="price" className="font-body">
                $350
              </p>

              <p id="session" className="font-heading">
                Per Session
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
