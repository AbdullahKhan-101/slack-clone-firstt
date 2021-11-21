import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login/Login";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://images.ctfassets.net/b7g9mrbfayuu/2X9HSx11okCecIGeEuEw4C/31a4112ed93e95eaf39e8cdef15ce5e4/Slack_Mark_Web.png?q=80&fm=png&w=500"
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />} />
            </Routes>
          </AppBody>
        </>
      )}
    </div>
  );
}

export default App;
const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    height: 170px;
    padding: 20px;
    margin-bottom: 30px;
  }
`;
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
