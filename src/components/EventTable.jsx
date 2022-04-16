import React, { useContext } from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'
import App from './App'

const EventTable = (props) => {
  const { state, dispatch } = props
  const value = useContext(AppContext)
  return (
    <div className="mb-3">
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} dispatch={dispatch} event={event} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventTable
