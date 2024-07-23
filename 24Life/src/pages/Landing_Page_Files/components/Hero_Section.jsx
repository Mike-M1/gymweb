import React, {useRef} from 'react'

export default function Hero_Section(props) {

 

  const scrollToRef = () => {
    props.info.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div id="herocontent" className="">

      <div id="actcontent" className="text-white gap-[20px]">

        <h1
          className="text-[40px] text-black font-heading"
          onClick={() => {
            console.log(window.innerWidth);
          }}
        >

          Train Like An Athlete
        
        </h1>

        <p className="text-[20px] font-body">You Will Get Results!</p>

        <button
          className="border-2 border-black p-[10px] bg-white text-black font-heading"
          onClick={scrollToRef}
        >

          Get Your Results

        </button>

      </div>

    </div>
  );
}
