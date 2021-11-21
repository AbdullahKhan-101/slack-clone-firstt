import { UpdateDisabledSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase";
import { db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [input, setInput] = useState("");

  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          placeholder={`Message #${channelName}`}
        />

        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 6px;
    padding: 12px 16px;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.2px;
    color: #464646;
  }
  > form > button {
    display: none;
  }
`;
