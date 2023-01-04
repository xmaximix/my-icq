const sendMessage = (message) => {
  return {
    type: "chat/ADD_MESSAGE",
    payload: message,
  };
};

export { sendMessage };
