import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebase";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://assets.materialup.com/uploads/6aaec49a-f457-4a87-b75e-4d9102982a7d/preview.jpg"
          alt=""
        />
        <h1>Sign in to the use Slack Clone</h1>
        <p>slackclone.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;
const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 3px #00000024, 0px 1px 3px #00000022;
  > h1 {
    margin-top: -100px;
  }
  > button {
    margin-top: 20px;
    background-color: green !important;
    text-transform: inherit;
    color: #fff !important;
    padding: 8px 16px !important;
  }
  > img {
    object-fit: contain;
    height: 200px;

    margin-bottom: 40px;
  }
`;
