import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addInput, addOperator, getOutput, resetAll } from './reducers-and-actions/calcActions'
import injectProps from './utils/decorators/injectProps'
import Calculator from './components/Calculator'

const mapStateToProps = (store) => ({
    input: store.calcReducer.input,
    output: store.calcReducer.output,
    operator: store.calcReducer.operator,
    showOutput: store.calcReducer.showOutput,
})

@connect(mapStateToProps, { addInput, addOperator, getOutput, resetAll })
class App extends Component {
    onSetNumber = (number) => {
        const { addInput } = this.props
        addInput(number)
    }

    onSetOperator = (operator) => {
        const { addOperator } = this.props
        addOperator(operator)
    }

    onGetValue = () => {
        const { getOutput } = this.props
        getOutput()
    }

    onClear = () => {
        const { resetAll } = this.props
        resetAll()
    }

    @injectProps
    render({input, output, showOutput}) {
        return (
            <div className="App">
                <h1 className="app-title">Simple Calculator</h1>
                <Calculator
                    input={input}
                    output={output}
                    showOutput={showOutput}
                    onSetNumber={this.onSetNumber}
                    onSetOperator={this.onSetOperator}
                    onGetValue={this.onGetValue}
                    onClear={this.onClear}/>
            </div>
        )
    }
}

App.propTypes = {
    input: PropTypes.string,
    output: PropTypes.string,
    operator: PropTypes.string,
    showOutput: PropTypes.bool,
};

export default App
