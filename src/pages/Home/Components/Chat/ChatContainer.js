import React from "react";
import Chat from "./Chat";
import { useSelector } from "react-redux";

function ChatContainer() {
  let messages = useSelector((state) => state.chat.messages);
  return <Chat messages={messages} />;
}

export default ChatContainer;
