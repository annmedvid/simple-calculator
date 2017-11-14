import React, { Component } from 'react'

import injectProps from '../utils/decorators/injectProps'
import KeyGenerator from '../utils/KeyGenerator'
import CalculatorCell from './CalculatorCell'

export default class Calculator extends Component {
    @injectProps
    render({ input, output, showOutput, onSetNumber, onSetOperator, onGetValue, onClear }) {
        const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.']
        const operations = ['+', '-', '*', '/']

        const numberCells = numbers.map(number => <CalculatorCell value={number} onClick={onSetNumber} key={KeyGenerator.getNext()} />)
        const operationCells = operations.map(operation => <CalculatorCell value={operation} onClick={onSetOperator} key={KeyGenerator.getNext()} />)

        return (
            <div className="calculator">
                <div className="calculator-cell input-cell">{showOutput ? output : input}</div>
                <CalculatorCell value="AC" onClick={onClear} />
                <CalculatorCell value="=" onClick={onGetValue} />
                {operationCells}
                {numberCells}
            </div>
        )
    }
}
