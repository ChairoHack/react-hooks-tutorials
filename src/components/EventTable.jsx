import React, { useContext } from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

const EventTable = () => {
  const { state } = useContext(AppContext)
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
          {state.eventTable.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventTable
