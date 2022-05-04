import React,{useState} from 'react'

import Buttons from './Buttons';
import './Calculator.css';
const Calculator = () => {
    const[val,setVal]=useState('');
    const[isCalculated,setIsCalculated]=useState(false);
    const[string,setString]=useState("");


    const handleClick=(e)=>{
        const string=val.concat(e.target.name);
        setVal(val.concat(e.target.name));
        setString(string);
        console.log(string);
    }


    const clearHandler=()=>{
        setString('');
        setVal('');
        setIsCalculated(false);
    }

    const backspaceHandler=()=>{
        setString(string.slice(0,-1));
        setVal(val.slice(0,-1));
    }


    const calculationHandler=()=>{
        try{
        setVal(eval(val));
        setIsCalculated(true);
        }catch(err)
        {
            setVal("ERROR!!!");
        }      
    }    
  return (

    <div className="container" style={{"transform": "translate(0px, 14px)"}}>
        <div className="result">
          <p id="result-box">{string}</p>
          <p id="result-box">{isCalculated? `Result=${val}`:""}</p>
        </div>
        
        <Buttons handleClick={handleClick} clear={clearHandler} backspace={backspaceHandler} calculation={calculationHandler}/>
      </div>


  )
}

export default Calculator
