import React, { useState } from 'react';
import Output from "./output";
import './App.css';

export default function App(){
  let [count, setCounter]=useState(1);
  let [isMorning, setMorning]=useState(false);

  return(
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Good {isMorning?'Morning':'Night'}</h1>
      <Output counter={count}/>

      <br />
      <br />

      <button onClick={()=>setCounter(count+1)}>Increase counter</button>
      <button onClick={()=>setCounter(count-1)}>Decrease counter</button> <br /> <br/>
      <button onClick={()=>setMorning(!isMorning)}>update day</button>
      <br />
      <br />

      <br />
      <br />
      <h5>Copyright 2020 - Developed by Syed Muhemin ALi</h5>
    </div>
  )
}
