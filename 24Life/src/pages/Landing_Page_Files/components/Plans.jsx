import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Plans() {

  const navigate = useNavigate();
  const goToPlans =()=>{
    navigate("/Plans");
  }

  return (
    <div id="Plans" className="flex flex-col gap-[20px] pt-[50px] bg-white">
      <h1 className="font-heading text-[30px]" id="plans1">
        Plans
      </h1>
      <div className="flex flex-col items-center ">
        <div className="flex flex-row gap-[10px] py-[20px]">
          <h1 className="font-heading text-[30px]" id="plans2">
            In Home
          </h1>
          <h1 className="font-heading text-[30px]" id="plans2">
            In Gym
          </h1>
        </div>
        <div className=" w-fit gap-[30px]" id="PlanCards">
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
              8 Sessions
            </p>
            <div className="w-[70px] h-[1px] bg-black "></div>
            <p id="price" className="font-body">
              $325
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
              16 Session
            </p>
            <div className="w-[70px] h-[1px] bg-black "></div>
            <p id="price" className="font-body">
              $285
            </p>

            <p id="session" className="font-heading">
              Per Session
            </p>
          </div>
        </div>
        <div>
          <button
            className="border-2 border-black rounded-[0px] p-[20px] mt-[20px]"
            id="planbtn"
            onClick={goToPlans}
          >
            More Plans
          </button>
        </div>
      </div>
    </div>
  );
}
