import React, { useEffect, useState } from "react";
import Matching from "../../components/matching/Matching";
import {
  connectSocket,
  emitAuthentication,
  emitFindNewUser,
  emitMatch,
  emitNewMessage,
  listenOnAuthenticated,
  listenOnMatched,
  listenOnReceiveMessage,
} from "../../lib/socket";
import { useHistory } from "react-router-dom";

const MatchingContainer = () => {
  const [isMatched, setIsMatched] = useState(false);
  const [content, setContent] = useState("");
  const [chats, setChats] = useState([]);
  const socket = connectSocket();
  const history = useHistory();

  useEffect(() => {
    listenOnMatched(socket, setIsMatched);
    listenOnAuthenticated(socket);
    listenOnReceiveMessage(socket, setChats);
    emitAuthentication(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  const onSubmitChat = (e) => {
    e.preventDefault();
    emitNewMessage(socket, content);
    setContent("");
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickStopMatching = () => {
    history.push("/main/match");
  };

  const onClickFindNewUser = () => {
    setIsMatched(false);
    setChats([]);
    emitFindNewUser(socket);
  };

  return (
    <Matching
      isMatched={isMatched}
      chats={chats}
      onSubmitChat={onSubmitChat}
      content={content}
      onChangeContent={onChangeContent}
      onClickStopMatching={onClickStopMatching}
      onClickFindNewUser={onClickFindNewUser}
    />
  );
};

export default MatchingContainer;
