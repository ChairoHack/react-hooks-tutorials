import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import EventTable from './EventTable'

console.log(AppContext)

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'Hello, I am provider.'}>
      <div className="container">
        This is a templete for React app.
        <EventForm state={state} dispatch={dispatch} />
        <EventTable state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  )
}

export default App
