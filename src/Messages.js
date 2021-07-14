import "./App.css";
import React from "react";

function Messages(props) {
  return props.messageList.map((message) => (
    <div>
      {message.author}: {message.text}
    </div>
  ));
}

export default Messages;
