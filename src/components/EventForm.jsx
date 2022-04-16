import React, { useState } from 'react'

const EventForm = (props) => {
  const { state, dispatch } = props
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e) => {
    e.preventDefault()

    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
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
        type: 'DELETE_ALL_EVENTS',
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
          disabled={state.length === 0}
        >
          全てのイベントを削除する
        </button>
      </form>
    </div>
  )
}

export default EventForm
