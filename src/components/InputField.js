import React ,{useRef,useState,useEffect} from 'react';
import '../styles/App.css';


const InputField=({setval, setref})=>{

    const ref2= useRef();

    useEffect(()=>{setref(ref2)},[])

    return(
    <div>
      <input id="input" type="text"  ref={ref2} onChange={(event)=>{setval(event.target.value)}} />
    </div>
    )
    }
export default  React.forwardRef(InputField);
