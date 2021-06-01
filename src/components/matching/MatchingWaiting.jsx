import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";

const MatchingWaiting = ({ onClickExitMatchingButton }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % 3);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <S.MatchingWrapper>
        <S.Matching>매칭중{".".repeat(count + 1)}</S.Matching>
        <S.ExitMatchingButton onClick={onClickExitMatchingButton}>
          매칭 종료
        </S.ExitMatchingButton>
      </S.MatchingWrapper>
    </>
  );
};

export default MatchingWaiting;
