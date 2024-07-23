import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import "./LandingPage.css"
import { useEffect, useState } from 'react'
import "./LandingPage.css"
import Hero_Section from './components/Hero_Section.jsx'
import SocialProof from './components/SocialProof.jsx'
import ExtraSocialProof from './components/ExtraSocialProof.jsx'
import Plans from './components/Plans.jsx'
import Navbar from '../../universal_components/Navbar/Navbar.jsx'
import Footer from "./components/Footer.jsx"
import CTA from "./components/CTA.jsx"

export default function LandingPage() {

   const myRef = useRef(null);

  return (
    <div className="flex flex-col w-screen" id="main">
      <div id="Hero" className="bg-transparent w-full">
  
        <Navbar/>

        <Hero_Section info={myRef}/>
      </div>

      <SocialProof/>

      <ExtraSocialProof/>

      <Plans/>
      <CTA info={myRef}/>
      <Footer/>
    </div>
  );
}
