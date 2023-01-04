import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "../../../../common/components/Image";
import { favoritesIcon, plusIcon, voiceRecordIcon } from "../../../../assets";
import { searchIcon } from "../../../../assets";
import {
  StyledChat,
  StyledChatBottomPanel,
  StyledChatHeader,
  StyledChatHeaderLeftSide,
  StyledChatHeaderRightSide,
  StyledDialogWindow,
  StyledMessageInput,
} from "./Chat.styled";
import { Trans } from "react-i18next";
import Message from "../ChatMessage/ChatMessage";
import Input from "../../../../common/components/Input";
import { sendMessage } from "../../../../store/actions/chat";
import { useChatScroll } from "../../../../utils/hooks";

function ChatHeader() {
  return (
    <StyledChatHeader>
      <ChatHeaderLeftSide />
      <ChatHeaderRightSide />
    </StyledChatHeader>
  );
}

function ChatHeaderLeftSide({ userAvatar = favoritesIcon }) {
  let userName = "Favorites";
  return (
    <StyledChatHeaderLeftSide>
      <Image url={userAvatar} size={"35px"} />
      <Trans>{userName}</Trans>
    </StyledChatHeaderLeftSide>
  );
}

function ChatHeaderRightSide() {
  return (
    <StyledChatHeaderRightSide>
      <Image url={searchIcon} size={"35px"} />
    </StyledChatHeaderRightSide>
  );
}

function DialogWindow({ messages }) {
  const messagesList = messages.map((message, i) => (
    <Message key={i} text={message} />
  ));
  const ref = useChatScroll(messages);

  return <StyledDialogWindow ref={ref}>{messagesList}</StyledDialogWindow>;
}

function BottomPanel() {
  return (
    <StyledChatBottomPanel>
      <Image url={plusIcon} size={"25px"}></Image>
      <MessagesInput></MessagesInput>
      <Image url={voiceRecordIcon} size={"25px"}></Image>
    </StyledChatBottomPanel>
  );
}

function MessagesInput() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && message.length > 0) {
      dispatch(sendMessage(message));
      setMessage("");
    }
  };

  return (
    <StyledMessageInput>
      <Input
        placeholder={"Сообщение"}
        leftIndent={"15px"}
        value={message}
        onChange={handleChange}
        onKeyDown={handleEnter}
      ></Input>
    </StyledMessageInput>
  );
}

function Chat({ messages }) {
  return (
    <StyledChat>
      <ChatHeader></ChatHeader>
      <DialogWindow messages={messages}></DialogWindow>
      <BottomPanel></BottomPanel>
    </StyledChat>
  );
}

export default Chat;
