import React from '@babel/template'
import ReactDOM from 'react-dom'

import App from './App'
import { UnitContextProvider } from './context/temperatureUnit-context'
import './global.css'

ReactDOM.render(
  <UnitContextProvider>
    <App />
  </UnitContextProvider>,
  document.getElementById('root')
)
