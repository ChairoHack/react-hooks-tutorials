import { combineReducer, combineReducers } from 'redux'

import eventTable from './eventTable'
import operationLogs from './operationLogs'

export default combineReducers({ eventTable, operationLogs })
