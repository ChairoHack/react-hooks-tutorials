import React, { useContext } from 'react'
import OperationLog from './OperationLog'
import AppContext from '../contexts/AppContext'

const OperationLogsTable = () => {
  const { state } = useContext(AppContext)
  return (
    <div className="mb-3">
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>時間</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((event, index) => (
            <OperationLog key={index} event={event} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OperationLogsTable
