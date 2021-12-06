import { signInWithPopup } from "firebase/auth";
import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "./firebase";
import { login } from "./features/userSlice";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            profileUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
