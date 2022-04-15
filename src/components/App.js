import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers/index";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();

    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  console.log({ state });

  return (
    <div className="container">
      This is a templete for React app.
      <div className="mb-3">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input value={title} className="form-control" id="formEventTitle" onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="formEventBody">ボディー</label>
            <textarea value={body} className="form-control" id="formEventBody" onChange={(e) => setBody(e.target.value)} />
          </div>

          <button className="btn btn-primary mr-2" onClick={addEvent}>
            イベントを作成する
          </button>
          <button className="btn btn-danger mr-2">全てのイベントを削除する</button>
        </form>
      </div>
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
      </table>
    </div>
  );
};

export default App;
