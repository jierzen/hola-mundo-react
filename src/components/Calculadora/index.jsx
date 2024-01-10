import React, { useState } from 'react';

const Calculadora = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);

    const handleCalculate = (operation) => {
        let res = 0;
        switch(operation) {
            case '+':
                res = number1 + number2;
                break;
            case '-':
                res = number1 - number2;
                break;
            case '*':
                res = number1 * number2;
                break;
            case '/':
                res = number1 / number2;
                break;
            default:
                res = 0;
        }
        setResult(res);
    };

    return (
        <div>
            <input 
                type="number" 
                value={number1} 
                onChange={(e) => setNumber1(+e.target.value)} 
            />
            <input 
                type="number" 
                value={number2} 
                onChange={(e) => setNumber2(+e.target.value)} 
            />
            <button onClick={() => handleCalculate('+')}>+</button>
            <button onClick={() => handleCalculate('-')}>-</button>
            <button onClick={() => handleCalculate('*')}>*</button>
            <button onClick={() => handleCalculate('/')}>/</button>
            <div>Resultado: {result}</div>
        </div>
    );
};

export default Calculadora;