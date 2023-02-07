import './Calculator.css'

import { useState } from 'react'

const Calculator = () => {
    const [displayNumber, setDisplayNumber] = useState([])
    /* console.log(displayNumber) */

    const handleExpression = (exp) => {
        console.log(exp)
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
                <button >X</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 4])}>4</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 5])}>5</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 6])}>6</button>
                <button >÷</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 1])}>1</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 2])}>2</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 3])}>3</button>
                <button >-</button>
                <button>DEL</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, 0])}>0</button>
                <button onClick={() => setDisplayNumber(arr => [...arr, ','])}>,</button>
                <button >+</button>
                <button>AC</button>
                <button onClick={() => handleExpression(displayNumber
                )}>=</button>

            </div>
        </div>
    )
}

export default Calculator