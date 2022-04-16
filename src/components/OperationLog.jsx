import React from 'react'

const OperationLog = ({ event }) => {
  return (
    <tr>
      <td>{event.descriptrion}</td>
      <td>{event.operatedAt}</td>
    </tr>
  )
}

export default OperationLog
