import createReducer from './reducerFactory'

import { ADD_INPUT, ADD_OPERATOR, GET_OUTPUT, RESET_ALL } from '../constants/actions'
import { parseValue } from '../utils/parseValue'

const INITIAL_STATE = {
    input: '0',
    output: '0',
    operator: '',
    showOutput: false,
}

const reducerMap = {
    [ADD_INPUT]: (state, input) => {
        input = parseValue(state.input, input)

        return {
            ...state,
            input,
            showOutput: false,
        }
    },
    [ADD_OPERATOR]: (state, operator) => {
        let output = state.input
        if (state.output && state.operator && state.input) {
            output = eval(`${state.output}${state.operator}${state.input}`)
        }

        return {
            ...state,
            output,
            operator,
            input: '0',
            showOutput: true,
        }
        
    },
    [GET_OUTPUT]: (state) => {
        let preOutput = state.input
        if (state.operator) {
            preOutput = `${state.output}${state.operator}${state.input}`
        }

        let output = eval(preOutput)
        if (String(output).length > 10) {
            output = output.toFixed(9)
        }

        return {
            ...INITIAL_STATE,
            output,
            showOutput: true,
        }
    },
    [RESET_ALL]: (state) => INITIAL_STATE
}

export default createReducer(reducerMap, INITIAL_STATE)