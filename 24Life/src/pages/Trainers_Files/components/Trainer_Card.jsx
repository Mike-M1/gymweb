import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Trainer_Card(props) {
     let [data1, setData1] = useState(null);
     const navigate = useNavigate();

  const goToSpecificBlog = () => {
    navigate(`/Trainer/Mike`, {state: {data: props.data}});
  };

     useEffect(() => {
       axios.get("http://localhost:3001/Trainers").then((data) => {
         setData1(data.data);
       });
     });

    
    useEffect(()=>{
        console.log(props)
    }, [])
  return (
    <>
      {props.data
        ? props.data.map((Trainer) => (
            <div id="testi" onClick={goToSpecificBlog} key={Trainer._id}>
              <div id="pic">
                <img alt="" />
                Image
              </div>
              <div id="summary">
                <h3 className="font-heading " id="heading">
                  {Trainer.Trainer_Name}
                </h3>
                <h3 className="font-heading " id="heading">
                  {Trainer.Expertise}
                </h3>
                <h3 className="font-body text-[30px]" id="body">
                  {Trainer.Blurb}
                </h3>
                <h3 className="font-body text-[30px]" id="body">
                  {Trainer.Services}
                </h3>
              </div>
            </div>
          ))
        : "No Trainers Yet"}
    </>
  );
}
