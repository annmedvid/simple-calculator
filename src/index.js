import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import rootReducer from './rootReducer'
import './styles/main.scss'

let store = createStore(rootReducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
  	</Provider>,
  	document.querySelector('.app')
)
