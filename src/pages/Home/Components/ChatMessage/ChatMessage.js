import React from "react";
import { StyledMessage, StyledText } from "./ChatMessage.styled";

function Message({ text = "empty" }) {
  return (
    <StyledMessage>
      <StyledText>{text}</StyledText>
    </StyledMessage>
  );
}

export default Message;
