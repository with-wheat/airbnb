import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'normalize.css'
import './assets/css/index.less'

import { HashRouter } from 'react-router-dom'

import store from './store'
import { Provider } from 'react-redux'

import theme from './assets/css/theme'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
)
