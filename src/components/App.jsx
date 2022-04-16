import React, { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import EventTable from './EventTable'
import OperationLogs from './OperationLogsTable'

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState
    ? JSON.parse(appState)
    : {
        eventTable: [],
        operationLogs: [],
      }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        This is a templete for React app.
        <EventForm />
        <EventTable />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App
