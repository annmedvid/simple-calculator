import React, { Component } from 'react'

import injectProps from '../utils/decorators/injectProps'

const classNames = {
	'+': 'plus',
	'-': 'minus',
	'/': 'divide',
	'*': 'multiply',
	'=': 'equais',
	'.': 'dot',
	'0': 'null',
	'AC': 'AC',
}

export default class CalculatorCell extends Component {
    @injectProps
    render({ value, onClick }) {
    	let classCell = ''
    	if (classNames[value]) {
    		classCell = `${classNames[value]}-cell`
    	}

        return (
            <div className={`calculator-cell ${classCell}`} onClick={() => onClick(value)}>
                {value}
            </div>
        )
    }
}
