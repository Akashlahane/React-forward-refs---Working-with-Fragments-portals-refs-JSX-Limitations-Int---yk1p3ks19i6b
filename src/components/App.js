import React ,{useRef,useState,useEffect} from 'react'
import '../styles/App.css';
import InputField from './InputField.js';



function App(){

  const [val, setval]=useState("");
  const [ref2, setref]=useState(null);

 const focusInput=()=>{
   ref2.current.focus();
 }

 const settingValue=()=>{
  document.getElementById("textarea").value=val;
 }
 
  return (
    <div>
     <InputField   type="text" setref={setref}  setval={setval} /><br/>
    <button id="settingValueButton"onClick={settingValue} >Set Value</button>
    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea" ></textarea>

    </div>
  );
}


export default App;

