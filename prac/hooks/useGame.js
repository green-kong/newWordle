import { useState, useEffect } from 'react';

const useTimer = (setHistory, setCorrect) => {
  const [timeRecord, setTimeRecord] = useState({ m: 0, s: 0 });
  const [timerId, setTimerId] = useState(null);
  const [isStart, setIsStart] = useState(false);
  const [scoreRecord, setScoreRecord] = useState(0);

  useEffect(() => {
    if (isStart) {
      setTimerId(
        setInterval(() => {
          setTimeRecord((timer) => {
            const newTimer = { ...timer };
            newTimer.s += 1;
            if (newTimer.s >= 60) {
              newTimer.s -= 60;
              newTimer.m += 1;
            }
            return newTimer;
          });
        }, 1000)
      );
    } else {
      setTimeRecord({ m: 0, s: 0 });
      clearInterval(timerId);
      setScoreRecord(0);
      setHistory([]);
      setCorrect(false);
    }
  }, [isStart]);

  const startClick = () => {
    setIsStart(true);
  };

  const restartClick = () => {
    setIsStart(false);
  };

  const countScore = () => {
    const tmp = scoreRecord + 1;
    setScoreRecord(tmp);
  };

  return {
    startClick,
    restartClick,
    isStart,
    timeRecord,
    scoreRecord,
    countScore,
    timerId,
  };
};

export default useTimer;
