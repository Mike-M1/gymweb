import React from 'react'
import { useState } from 'react';
import axios from "axios"
import "../Credentials_Files/Credentials.css"
import Navbar from '../../universal_components/Navbar/Navbar';
import CredentialForm from './components/CredentialForm';

export default function Credentials() {


  let [name, setName] = useState(null)
  let [email, setEmail] = useState(null)
  let [password, setPassword] = useState(null)


  function addUser(){
    axios.post("http://localhost:3001/createuser", {name, email, password} ).then((response)=> {
      console.log("Response from server:", response.data);
    }).catch((error) => {
      console.log(error)
    })
  }




  return (
    <div className='h-full' id="main">
      <Navbar/>
      <CredentialForm/>
    </div>
  );
}
