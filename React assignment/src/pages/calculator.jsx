import React, {useState} from "react";
import "../styles/calculator.css";
function CalculatorComponent(){
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState(0);


    const add = () => {
        setResult(num1 + num2);
    };
    const subtract = () => {
        setResult(num1 - num2);
    };
    const multiply = () => {
        setResult(num1 * num2);
    };
    const divide = () => {
        setResult(num1 / num2);
    };
    return(
        <div className="calculator">
             <label htmlFor="result"><h1 className="result">{result}</h1></label>
            <label htmlFor="fstnum" className="no_label">1st Number:</label><br />
            <input className= "text_box" type="number" value={num1} onChange={e => setNum1(+e.target.value)}/><br />
            <label htmlFor="2ndnum" className="no_label">2nd Number:</label><br />
            <input className= "text_box" type="number" value={num2} onChange={e => setNum2(+e.target.value)}/><br />
            <button onClick={add} className="arith_button">+</button>
            <button onClick={subtract} className="arith_button">-</button>
            <button onClick={multiply} className="arith_button">*</button>
            <button onClick={divide} className="arith_button">/</button><br />
        </div>
    );
}

export default CalculatorComponent;