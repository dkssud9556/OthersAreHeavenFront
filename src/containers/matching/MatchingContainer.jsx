import React, { useEffect, useRef, useState } from "react";
import Matching from "../../components/matching/Matching";
import {
  connectSocket,
  emitAuthentication,
  emitFindNewUser,
  emitMatch,
  emitNewMessage,
  listenOnAuthenticated,
  listenOnMatched,
  listenOnOppositeLeave,
  listenOnReceiveMessage,
} from "../../lib/socket";
import { useHistory } from "react-router-dom";

const MatchingContainer = () => {
  const [isMatched, setIsMatched] = useState(false);
  const [content, setContent] = useState("");
  const [chats, setChats] = useState([]);
  const [email, setEmail] = useState("");
  const [isLeaveOpposite, setIsLeaveOpposite] = useState(false);
  const socket = connectSocket();
  const history = useHistory();
  const chatArea = useRef();

  useEffect(() => {
    listenOnMatched({ socket, setIsMatched });
    listenOnAuthenticated({ socket, setEmail });
    listenOnReceiveMessage({ socket, setChats, chatArea });
    listenOnOppositeLeave({ socket, setIsLeaveOpposite });
    emitAuthentication(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  const onSubmitChat = (e) => {
    e.preventDefault();
    emitNewMessage({ socket, content });
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
    emitFindNewUser(socket);
  };

  const onClickExitMatchingButton = () => {
    history.push("/main/match");
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
      email={email}
      setChats={setChats}
      isLeaveOpposite={isLeaveOpposite}
      setIsLeaveOpposite={setIsLeaveOpposite}
      onClickExitMatchingButton={onClickExitMatchingButton}
      chatArea={chatArea}
    />
  );
};

export default MatchingContainer;
