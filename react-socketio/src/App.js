import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import socketIOClient from "socket.io-client";

import { getCLS, getFID, getLCP } from 'web-vitals';

const ENDPOINT = "http://192.168.15.8:3500/";

function App() {
  const [response, setResponse] = useState("");
  const history = useHistory();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("chat message", data => {
      setResponse(data);
      if (data === "register") {
        history.push("/game");
      }
    });

    return () => {
      socket.on("disconnect", () => {
        console.log('user disconnected');
      });
    }

  }, [] /* it will run once */);

  var register = () => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit("chat message", "xxxx");
    setResponse("register");



    getCLS(console.log);
    getFID(console.log);
    getLCP(console.log);
  }

  return (
    <div>
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
      <button onClick={register}>I want to play</button>

    </div>
  );
}

export default App;