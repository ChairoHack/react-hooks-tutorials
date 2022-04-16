import React, { useState, useContext } from 'react'
import {
  DELETE_ALL_EVENTS,
  CREATE_EVENT,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e) => {
    e.preventDefault()

    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601(),
    })

    setTitle('')
    setBody('')
  }

  const deleteAllEvents = (e) => {
    e.preventDefault()

    const result = window.confirm(
      '全てのイベントを本当に削除しても良いですか？'
    )
    if (result) {
      dispatch({
        type: DELETE_ALL_EVENTS,
      })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました。',
        operatedAt: timeCurrentIso8601(),
      })
    }
  }

  const deleteAllOperationLogs = (e) => {
    e.preventDefault()

    const result = window.confirm(
      '全ての操作ログを本当に削除しても良いですか？'
    )
    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
      })
    }
  }

  const unCreatable = title === '' || body === ''

  return (
    <div className="mb-3">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            value={title}
            className="form-control"
            id="formEventTitle"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            value={body}
            className="form-control"
            id="formEventBody"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary mr-2"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger mr-2"
          onClick={deleteAllEvents}
          disabled={state.eventTable.length === 0}
        >
          全てのイベントを削除する
        </button>
        <button
          className="btn btn-danger mr-2"
          onClick={deleteAllOperationLogs}
          disabled={state.operationLogs.length === 0}
        >
          全ての操作ログを削除する
        </button>
      </form>
    </div>
  )
}

export default EventForm
