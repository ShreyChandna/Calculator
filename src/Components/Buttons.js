import React,{useState} from 'react'
import './Calculator.css'
import {BsFillBackspaceFill} from 'react-icons/bs'
const Buttons = (props) => {
    return (
    <div>
        <div className="buttons">
          <button  className="button action-btn" id="clear" style={{color:"#00000073"}} onClick={props.clear}> C </button>
          <button  className="button action-btn" style={{color:"#00000073"}} onClick={props.backspace}><BsFillBackspaceFill /></button>
          <button name="%" className="button num-button  action-btn" style={{color:"#00000073"}} onClick={props.handleClick}> %</button>
          <button name="/" className="button num-button  calc-action-btn" onClick={props.handleClick}> /</button>
          <button name="7" className="button num-button seven" onClick={props.handleClick}>7</button>
          <button name="8" className="button num-button eight" onClick={props.handleClick}>8</button>
          <button name="9" className="button num-button  nine" onClick={props.handleClick}>9</button>
          <button name="*" className="button num-button  calc-action-btn" onClick={props.handleClick}>X</button>
          <button name="4" className="button num-button  four" onClick={props.handleClick}>4</button>
          <button name="5" className="button num-button  five" onClick={props.handleClick}>5</button>
          <button name="6" className="button num-button  six" onClick={props.handleClick}>6</button>
          <button name="-" className="button num-button  calc-action-btn" onClick={props.handleClick}>-</button>
          <button name="1" className="button num-button  one" onClick={props.handleClick}>1</button>
          <button name="2" className="button num-button  two" onClick={props.handleClick}>2</button>
          <button name="3" className="button num-button  three" onClick={props.handleClick}>3</button>
          <button name="+" className="button num-button  calc-action-btn" onClick={props.handleClick}>+</button>
          <button name="0" className="button num-button  zero" onClick={props.handleClick}>0</button>
          <button name="." className="button num-button  point" onClick={props.handleClick}>.</button>
          <button className="button calc-action-btn" id="total" style={{color:"white",background:"#26dcb1"}} onClick={props.calculation}>=</button>
     
        </div>
      
    </div>
  )
}

export default Buttons
