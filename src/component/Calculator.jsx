import './Calculator.css'

import { useState } from 'react'

const Calculator = () => {
    const [displayNumber, setDisplayNumber] = useState('')
    console.log(displayNumber)

    return (
        <div className='calculator-container'>
            <div className='display'>
                <input type='text' onChange={(e) => setDisplayNumber(e.target.value)} />
            </div>
            <div className='buttons'>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>X</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>÷</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>-</button>
                <button>DEL</button>
                <button>0</button>
                <button>,</button>
                <button>+</button>
                <button>AC</button>
                <button>=</button>

            </div>
        </div>
    )
}

export default Calculator