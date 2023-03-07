import { createMessage } from "../../services/firebase/actions/messages/createMessage";
import { ADD_MESSAGE, DELETE_MESSAGE } from "../slices/chat";

const sendMessage = (message) => {
  return (dispatch, getState) => {
    let chat = getState().chat;
    chat.pendingMessages = [...chat.pendingMessages, message];
    createMessage(message, chat.dbMessages.length, chat.user);
    chat.displayedMessages = chat.db.concat(chat.pendingMessages);
    dispatch(ADD_MESSAGE());
  };
};

const deleteMessage = (message) => {
  return (dispatch, getState) => {
    dispatch(DELETE_MESSAGE(message));
  };
};

export { sendMessage, deleteMessage };
