import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Button,
  ButtonBase,
  IconButton,
  InputLabel,
  Input,
} from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Kaguya", message: "hey" },
    { username: "Majka", message: "how are you" },
    { username: "abvg", message: "good Thanks" },
  ]);
  const [username, setUsername] = useState("");

  //useState = variable  in React
  //useEffect = run code on a condition in React
  useEffect(() => {
    //run once when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  //useEffect(()=>{
  // run a code
  //if its blank inside [],this code runs ONCE
  //} ,[condition])

  useEffect(() => {
    setUsername(prompt("Please enter your username"));

    //const username = prompt("Enter your username");
  }, []);

  const sendMessage = (event) => {
    //all the logic to send a message
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Poruke</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app_iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="snpm install @material-ui/coreubmit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
