import React, { useEffect } from "react";
import Matching from "../../components/matching/Matching";
import { connectSocket, emitAuthentication, emitMatch } from "../../lib/socket";

const MatchingContainer = () => {
  useEffect(() => {
    const socket = connectSocket();
    emitAuthentication(socket);
    emitMatch(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  return <Matching />;
};

export default MatchingContainer;
