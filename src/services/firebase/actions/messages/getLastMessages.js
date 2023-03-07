import { ref, onValue, getDatabase } from "@firebase/database";
import { store } from "../../../../store/store";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "../../../firebase";

export function initialize() {
  const app = initializeApp(firebaseConfig);
  return app;
}

const db = getDatabase(initialize());

const query = ref(db, `messages/${store.getState().chat.user}`);

onValue(
  query,
  (snapshot) => {
    const promise = new Promise((resolve, reject) => {
      let data = snapshot.val();
      resolve(data);
    });

    promise.then((result) => {
      console.log(result);
      if (result != null) {
        store.dispatch({
          type: "chat/ONADDED_MESSAGE",
          payload: result,
        });
      }
    });
  },
  (error) => {
    console.error(error);
  }
);
