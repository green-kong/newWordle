function makeHistory(history, setHistory, val, answer) {
  const log = ['out', 'out', 'out', 'out', 'out'];
  const valueArr = val;
  const answerArr = answer.split('');

  for (let i = 0; i < 5; i++) {
    if (valueArr[i] === answerArr[i]) {
      log[i] = 'strike';
      answerArr[i] = 'strike';
    }
  }

  for (let i = 0; i < 5; i++) {
    if (answerArr[i] === 'strike') {
      continue;
    }

    if (answerArr.includes(valueArr[i])) {
      log[i] = 'ball';
      const idx = answerArr.indexOf(valueArr[i]);
      answerArr[idx] = false;
      continue;
    }
  }
  const newHistory = [...history];

  newHistory.push(log);
  setHistory(newHistory);
}

export default makeHistory;
