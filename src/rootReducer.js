import { combineReducers } from 'redux'
import calcReducer from './reducers-and-actions/calcReducer'

const rootReducer = combineReducers({
    calcReducer
})

export default rootReducer