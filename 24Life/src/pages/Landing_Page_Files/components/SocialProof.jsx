import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SocialProof() {
  const navigate = useNavigate();

  const goToTestimonials =() => {
    navigate("/Testimonials")
  }
  return (
    <div
      id="SocialProof"
      className="flex flex-col py-[20px] justify-around items-center gap-[20px] pb-[50px]"
    >
      <h1 className="font-heading" id="text1">
        The Only Way To Get Results
      </h1>
      <h2 className="font-body text-[4vw]" id="text2">
        See What Your Results Could Be!
      </h2>
      <button
        className="border-black border-2  p-[10px] font-heading "
        onClick={goToTestimonials}
        id="testimonialbtn"
      >
        Testimonials
      </button>
    </div>
  );
}
