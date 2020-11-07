import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://192.168.15.8:3500/";

function App() {
  const [response, setResponse] = useState("");
  const history = useHistory();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("chat message", data => {
      setResponse(data);
      if( data === "register" ) {
        history.push("/game");
      }
    });
  }, []);

  var register = () => {
    setResponse("register");
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