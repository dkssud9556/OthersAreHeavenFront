import socketIO from "socket.io-client";
import config from "../config";

export const connectSocket = () =>
  socketIO(config.SERVER_URL, {
    transports: ["websocket"],
    forceNew: true,
    reconnectionAttempts: 3,
    timeout: 2000,
  });
