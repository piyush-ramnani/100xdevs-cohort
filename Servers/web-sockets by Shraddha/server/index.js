import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 8000;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//Initializing a new WebSocketServer
const wss = new WebSocketServer({ server });

//Event Listener for Connection
wss.on("connection", (ws) => {
  //Event Listener for Message Reception:
  ws.on("message", (data) => {
    console.log("Data from client: %s ", data);
    ws.send("Response from the server");
  });
});

/*
Observe network tab in the console.
Like we have http apis for server connection,
we have websocket browser apis are used for a websocket connection
https://hoppscotch.io/realtime/websocket
*/
