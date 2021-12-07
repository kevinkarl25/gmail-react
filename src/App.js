import React, { useEffect } from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import Login from "./Login";
import { onAuthStateChanged } from "@firebase/auth";

function App() {
  const sendMessageIs0pen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is logged in
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />

            <Routes>
              <Route path="mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>

          {sendMessageIs0pen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
