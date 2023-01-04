import React from "react";
import { createRoot } from "react-dom/client";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, onValue } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./service/firebase";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeContainer from "./pages/Home";
import "./i18n";

const container = document.getElementById("root");
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer></HomeContainer>,
  },
]);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const db = getDatabase(app);

const starCountRef = ref(db, "yolo");

onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  store.dispatch({ type: "chat/ADD_MESSAGE", payload: data });
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
