import { ADD_MESSAGE } from "../slices/chat";
import { store } from "../store";

const sendMessage = (message) => {
  console.log("xd");
  store.dispatch(ADD_MESSAGE(message));
};

export { sendMessage };
