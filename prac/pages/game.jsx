import CenterDiv, { BorderDiv } from '../components/divCenter';
import StyledButton2 from '../components/button2';
import Square from '../components/square';
import Alert from '../components/alert';

import useTimer from '../hooks/useGame';
import useAnswer from '../hooks/useAnswer';

import makeHistory from '../util/answers/makeHistory';

import { useState } from 'react';

const Game = () => {
  const [error, setError] = useState('');
  const [correct, setCorrect] = useState(false);
  const [history, setHistory] = useState([]);

  const {
    startClick,
    restartClick,
    isStart,
    timeRecord,
    scoreRecord,
    countScore,
    timerId,
  } = useTimer(setHistory, setCorrect);

  const answer = useAnswer(isStart);

  const renderSquare = (checkAnswer) => {
    const arr = [];

    for (let i = 0; i < scoreRecord + 1; i++) {
      const tried = scoreRecord <= i ? false : true;
      arr.push(
        <Square
          checkAnswer={checkAnswer}
          tried={tried}
          history={history[i]}
          correct={correct}
        />
      );
    }
    return arr;
  };

  const checkAnswer = (values) => {
    const check = values.some((v) => v === '');
    if (check) {
      setError('빈칸을 채워주세요!');
    } else {
      setError('');
      if (values.join('') === answer) {
        setCorrect(true);
        clearInterval(timerId);
      } else {
        makeHistory(history, setHistory, values, answer);
        countScore();
      }
    }
  };

  return (
    <>
      <CenterDiv>
        <BorderDiv w="80px" color="#730758">
          {timeRecord.m}:{timeRecord.s}
        </BorderDiv>
      </CenterDiv>
      <CenterDiv flex="none">
        {isStart && renderSquare(checkAnswer, history, correct)}
        <CenterDiv mt="5px">
          {error && <Alert mb="30px">{error}</Alert>}
        </CenterDiv>
        <CenterDiv>
          {isStart ? (
            <StyledButton2 onClick={restartClick} color="tomato">
              다시시작
            </StyledButton2>
          ) : (
            <StyledButton2 onClick={startClick}>게임시작</StyledButton2>
          )}
        </CenterDiv>
      </CenterDiv>
    </>
  );
};

export default Game;
