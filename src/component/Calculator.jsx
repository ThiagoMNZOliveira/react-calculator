import './Calculator.css'

import { useState } from 'react'

const Calculator = () => {
    const [displayNumber, setDisplayNumber] = useState('')
    const operations = ['+', '-', '/', '*', '.']

    const calculate = (displayNumber) => {


        if (displayNumber.length === 0) return
        
        const result = String(eval(displayNumber))

        
        setDisplayNumber(result)

    }

    const handleAllClear = () => {
        setDisplayNumber('')

    }

    const handleDelete = (displayNumber) => {
        let numbers = displayNumber.split('');
        const deletedNumber = numbers.pop();
        setDisplayNumber(numbers.join(''))
    }

    const verifyDuplicatedOperators = (op) => {

        if (operations.includes(op) && operations.includes(displayNumber.slice(-1))) {
            return;
        } else {
            setDisplayNumber(value => value + op)
        }
    }





    return (
        <div className='calculator-container'>
            <div className='display'>
                <span>{ }</span>
                <span>{displayNumber.length > 0 ? displayNumber : '0'}</span>
            </div>
            <div className='buttons'>
                <button onClick={() => setDisplayNumber(value => value + 8)}>8</button>
                <button onClick={() => setDisplayNumber(value => value + 7)}>7</button>
                <button onClick={() => setDisplayNumber(value => value + 9)}>9</button>
                <button onClick={() => verifyDuplicatedOperators('*')}
                    value='*'>
                    *
                </button>
                <button onClick={() => setDisplayNumber(value => value + 4)}>4</button>
                <button onClick={() => setDisplayNumber(value => value + 5)}>5</button>
                <button onClick={() => setDisplayNumber(value => value + 6)}>6</button>
                <button onClick={() => verifyDuplicatedOperators('/')}
                    value='/'>
                    ÷
                </button>
                <button onClick={() => setDisplayNumber(value => value + 1)}>1</button>
                <button onClick={() => setDisplayNumber(value => value + 2)}>2</button>
                <button onClick={() => setDisplayNumber(value => value + 3)}>3</button>
                <button onClick={() => verifyDuplicatedOperators('-')}
                    value='-'>
                    -
                </button>
                <button onClick={() => handleDelete(displayNumber)}>DEL</button>
                <button onClick={() => setDisplayNumber(value => value + 0)}>0</button>
                <button onClick={() => verifyDuplicatedOperators('.')}>.</button>
                <button onClick={() => verifyDuplicatedOperators('+')}
                    value='+'>
                    +
                </button>
                <button onClick={() => handleAllClear()}>AC</button>
                <button onClick={() => calculate(displayNumber)}>=</button>

            </div>
        </div>
    )
}

export default Calculator