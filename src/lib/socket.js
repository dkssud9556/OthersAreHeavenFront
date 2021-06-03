import socketIO from "socket.io-client";
import config from "../config";

export const connectSocket = () =>
  socketIO(config.SERVER_URL, {
    transports: ["websocket"],
    forceNew: true,
    reconnectionAttempts: 3,
    timeout: 2000,
  });

export const emitAuthentication = (socket) => {
  socket.emit("AUTHENTICATION", { token: localStorage.getItem("token") });
};

export const listenOnAuthenticated = ({ socket, setEmail }) => {
  socket.on("AUTHENTICATED", (data) => {
    setEmail(data.email);
  });
};

export const listenOnMatched = ({ socket, setIsMatched }) => {
  socket.on("MATCHED", () => {
    setIsMatched(true);
  });
};

export const emitNewMessage = ({ socket, content }) => {
  socket.emit("NEW_MESSAGE", { content, token: localStorage.getItem("token") });
};

export const listenOnReceiveMessage = ({ socket, setChats, chatArea }) => {
  socket.on("RECEIVE_MESSAGE", (chat) => {
    const beforeScrollHeight = chatArea.current.scrollHeight;
    const beforeScrollTop = chatArea.current.scrollTop;
    setChats((prevChats) => [...prevChats, chat]);
    if (
      beforeScrollTop ===
      beforeScrollHeight - chatArea.current.offsetHeight
    ) {
      chatArea.current.scrollTo(
        0,
        chatArea.current.scrollHeight - chatArea.current.offsetHeight
      );
    }
  });
};

export const emitFindNewUser = (socket) => {
  socket.emit("FIND_NEW_USER", { token: localStorage.getItem("token") });
};

export const listenOnOppositeLeave = ({ socket, setIsLeaveOpposite }) => {
  socket.on("OPPOSITE_LEAVE", () => {
    setIsLeaveOpposite(true);
  });
};
