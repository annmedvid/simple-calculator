import { ADD_INPUT, ADD_OPERATOR, GET_OUTPUT, RESET_ALL } from '../constants/actions'

export const addInput = (data) => ({
    type: ADD_INPUT,
    payload: data,
})

export const addOperator = (data) => ({
    type: ADD_OPERATOR,
    payload: data,
})

export const getOutput = () => ({
    type: GET_OUTPUT
})

export const resetAll = () => ({
    type: RESET_ALL
})
