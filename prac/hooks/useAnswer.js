import wordArr from '../util/answers/answers';
import { useState, useEffect } from 'react';

const randomMath = () => {
  return Math.floor(Math.random() * wordArr.length);
};

const useAnswer = (isStart) => {
  const [answer, setAnswer] = useState();

  useEffect(() => {
    if (isStart) {
      setAnswer(wordArr[randomMath()]);
    }
  }, [isStart]);

  return answer;
};

export default useAnswer;
