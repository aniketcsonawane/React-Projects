function CalculatorButtons ({onClickButton}) {
  var buttons = [
    ['AC', 'C', '+/-', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['%', '0', '.', '=']
  ]
  return (
    <div>
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className='row buttons'>
          {row.map((button, buttonIndex) => (
            <button
              key={buttonIndex}
              className='btn '
              id={button === 'AC' || button === 'C' ? 'clear' : ''}
              onClick={ () => onClickButton(button)}
            >
              {button}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CalculatorButtons
