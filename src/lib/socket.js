import { io } from "socket.io-client";
import config from "../config";

export const connectSocket = () =>
  io.connect(`${config.SERVER_URL}`, {
    transports: ["websocket"],
    path: "/socket.io",
  });
