import Display from './Display'
import CalculatorButtons from './CalculatorButtons'
import { useState } from 'react'

function Calculator () {
  const [displayVal , setDisplayVal] = useState("");

  const buttonClicked = (buttonText) => {
    switch (buttonText) {
      case 'AC':
        setDisplayVal('');
        break
      case 'C':
        setDisplayVal('');
        break

      default:
        if (buttonText === "=") {
          console.log('displayVal:',displayVal);
          var result = eval(displayVal);
          setDisplayVal(result);          
        }else{
          var newVal = displayVal + buttonText;
          setDisplayVal(newVal);  
        }
        break
    }
  }
  return (
    <>
      <div className='calculator'>
        <Display displayVal = {displayVal}></Display>
        <CalculatorButtons onClickButton={buttonClicked}></CalculatorButtons>
      </div>
    </>
  )
}

export default Calculator
