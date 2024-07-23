import React from 'react'
import Jacksonville from "../../../assets/jacksonville.jpg"
import MIT from "../../../assets/MIT.png"
import Oregon from "../../../assets/oregon.png"

export default function ExtraSocialProof() {
  return (
    <div
      id="ExtraSocialProof"
      className="flex flex-col justify-between items-center w-full py-[10px]"
    >
      <h1 className="font-heading text-[20px] mb-[10px]" id="plans2">
        Our Athletes Have Attended:
      </h1>
      <div
        id="scroller"
        className="flex flex-row justify-between items-center gap-[1vw] px-[20px] mb-[20px]"
      >
        <div className="text-black text-[20px] flex flex-col justify-center items-center border-black border-2 h-[20px] w-[20px] p-5 rounded-[500px]">
          {"<"}
        </div>
        <div id="college" className="flex flex-col justify-center items-center">
          <img
            id="img1"
            src={Jacksonville}
            alt=""
            className="w-[90%] h-[90%] rounded-[50%] "
          />
          <p className="font-heading" id="caption">
            Jacksonville
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center "
          id="college"
        >
          <img
            id="img1"
            src={MIT}
            alt=""
            className="w-[90%] h-[90%] rounded-[50%]"
          />
          <p className="font-heading" id="caption">
            MIT
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center  "
          id="college"
        >
          <img
            id="img1"
            src={Oregon}
            alt=""
            className="w-[90%] h-[90%] rounded-[50%]"
          />
          <p className="font-heading" id="caption">
            Oregon
          </p>
        </div>
        <div className="text-black text-[20px] flex flex-col justify-center items-center border-black border-2 h-[20px] w-[20px] p-5 rounded-[500px]">
          {">"}
        </div>
      </div>
    </div>
  );
}
