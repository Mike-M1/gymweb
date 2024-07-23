import React, {useState} from 'react'
import axios from 'axios'

export default function CTA(props) {

  let [name, setName] = useState(null)
  let [email, setEmail] = useState(null)

  const goToCredentials = async() => {
    let user = {
      name,
      email
    }
    let data = await axios.post("https://gymweb-backend.onrender.com/CTA_Users", user);
  }

  return (
    <div id="CTA" className="flex flex-col justify-center items-center">
      <div
        className="flex flex-row justify-center items-center gap-10 h-fit bg-white w-fit py-[40px] px-[20px] rounded-[10px]"
        id="ctacard"
      >
        <div className="flex flex-col gap-[10px] justify-center " ref={props.info}>
          <h1 className="font-heading tracking-[4px] text-[30px]">
            Sign Up With Us
          </h1>
          <div id="hr" className="color-black" />
          <p className="font-body text-[15px] tracking-[1px]">
            Something something extra stuff
          </p>
        </div>
        <div className="flex flex-col" id="inputbtn">
          <input
            type="text"
            className="border-black border-2 rounded-[10px] p-[10px]"
            placeholder="Name"
            id="email"
            name="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            className="border-black my-[10px] border-2 rounded-[10px] p-[10px]"
            placeholder="Email"
            id="email"
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="text-white bg-black my-[10px] py-[5px]"
            id="btn"
            onClick={() =>{goToCredentials}}
          >
            {"Let's Do This"}
          </button>
        </div>
      </div>
    </div>
  );
}
