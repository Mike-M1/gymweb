import React from 'react'

export default function Footer() {
  return (
    <div
      id="Footer"
      className="flex flex-col items-center gap-[20px] bg-white py-[20px]"
    >
      <div id="socialinks" className="flex flex-row gap-[30px]">
        {/* <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /> */}
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
      <h1>Copyright Stuff</h1>
      <h1>Some Legal Stuff</h1>
    </div>
  );
}
