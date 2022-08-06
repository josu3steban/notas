import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import NotesScreen from './NotesScreen'
import './index.css'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = { store }>
      <NotesScreen />
    </Provider>
  </React.StrictMode>
)
