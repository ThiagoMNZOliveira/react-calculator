import './Calculator.css'

import { useState } from 'react'

const Calculator = () => {
    const [displayNumber, setDisplayNumber] = useState([])
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operation, setOperation] = useState('');
    /* console.log(displayNumber) */

    const handleExpression = (firstNumber, operation, displayNumber) => {


        if (displayNumber.length === 0) return



        let result;

        const secondNumber = Number(displayNumber.join(''))

        if (operation === '+') {
            result = Number(firstNumber) + secondNumber;
        } else if (operation === '-') {
            result = Number(firstNumber) - secondNumber;

        } else if (operation === 'X') {
            result = Number(firstNumber) * secondNumber;

        } else {
            result = Number(firstNumber) / secondNumber

        }

        // check if number is float
        if(result % 1 === 0) {
            setFirstNumber(result);

            setDisplayNumber(arr => [result])
        } else {
            setFirstNumber(result.toFixed(2));

        setDisplayNumber(arr => [result.toFixed(2)])
        }
        
        console.log(firstNumber, operation, secondNumber, result)
    }

    const handleAllClear = () => {
        setDisplayNumber([])
        setFirstNumber('')
        setSecondNumber('')
    }

    const handleDelete = (displayNumber) => {
        let numbers = displayNumber;
        const deletedNumber = numbers.pop();
        setDisplayNumber(arr => [...numbers])
    }

    const handleOperation = (displayNumber, e) => {

        setOperation(e.target.value);
        setDisplayNumber([])


        if (firstNumber !== '') {
            setSecondNumber(displayNumber.join(''))
        } else {
            setFirstNumber(displayNumber.join(''))
        }
    }



    return (
        <div className='calculator-container'>
            <div className='display'>
                <p>{displayNumber}</p>
            </div>
            <div className='buttons'>
                <button onClick={() => setDisplayNumber(arr => [...arr, 8])}>8</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 7])}>7</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 9])}>9</button>
                <button
                    onClick={(e) => handleOperation(displayNumber, e, 'value')}
                    value='X'>
                    X
                </button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 4])}>4</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 5])}>5</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 6])}>6</button>
                <button
                    onClick={(e) => handleOperation(displayNumber, e, 'value')}
                    value='/'>
                    ÷
                </button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 1])}>1</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 2])}>2</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 3])}>3</button>
                <button
                    onClick={(e) => handleOperation(displayNumber, e, 'value')}
                    value='-'>
                    -
                </button>
                <button onClick={() => handleDelete(displayNumber)}>DEL</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 0])}>0</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, '.'])}>.</button>
                <button
                    onClick={(e) => handleOperation(displayNumber, e, 'value')}
                    value='+'>
                    +
                </button>
                <button onClick={() => handleAllClear()}>AC</button>
                <button onClick={() => handleExpression(firstNumber, operation, displayNumber)}>=</button>

            </div>
        </div>
    )
}

export default Calculator