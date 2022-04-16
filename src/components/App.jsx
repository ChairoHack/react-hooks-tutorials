import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import EventTable from './EventTable'

const App = () => {
  const initialState = {
    eventTable: [],
    operationLogs: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        This is a templete for React app.
        <EventForm />
        <EventTable />
      </div>
    </AppContext.Provider>
  )
}

export default App
