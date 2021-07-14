import React, { useEffect, useState } from "react";
// import React from "react";
import Messages from "./Messages";
import "./App.css";

function App(props) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [robotReply, setRobotReply] = useState("");

  function robotReplies() {
    setRobotReply(`Robot: Thanks for your message, buddy. I am a robot`);
    setMessageList([
      ...messageList,
      { text: "Thanks for your message, buddy. I am a robot", author: "robot" },
    ]);
  }

  useEffect(() => {
    try {
      if (messageList[messageList.length - 1].author === "user") {
        setTimeout(robotReplies, 1500);
      }
    } catch {}
  }, [messageList]);

  function changeHandler(event) {
    setValue(event.target.value);
  }

  function onSubmit() {
    setRobotReply("");
    setMessage(value);
    setMessageList([...messageList, { text: value, author: "user" }]);
  }

  return (
    <div>
      <div className="inputGroup">
        <ol>
          <li>Input your message and click submit</li>
          <li>Wait for robot to reply</li>
        </ol>
        <input
          type="text"
          value={value}
          onChange={changeHandler}
          className="inputStyle"
        ></input>
        <button onClick={onSubmit} className="inputButtonStyle">
          Submit
        </button>
      </div>
      <div>
        <p>Your chat:</p>
        <Messages messageList={messageList} />
      </div>
    </div>
  );
}

export default App;
