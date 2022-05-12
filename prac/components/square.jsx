import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';

const Input = styled.input`
  width: 75px;
  height: 75px;
  font-size: 60px;
  text-align: center;
  padding-bottom: 10px;
  margin-bottom: 30px;
  background-color: ${(props) => (props.correct ? 'greenyellow' : '')};
  :last-child {
    margin-bottom: 0;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 430px;
`;

const Span = styled.span`
  display: inline-block;
  width: 75px;
  height: 75px;
  font-size: 60px;
  border: 1px solid black;
  text-align: center;
  line-height: 73px;
  box-sizing: border-box;
  margin-bottom: 10px;
  background-color: ${({ result }) => {
    if (result === 'strike') {
      return 'greenyellow';
    } else if (result === 'ball') {
      return 'rgb(245, 253, 131)';
    } else {
      return 'lightgrey';
    }
  }};
`;

const style = {
  display: 'none',
};

const Square = (props) => {
  const { checkAnswer, tried, history, correct } = props;
  const inputArr = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const [values, setValues] = useState(Array(5).fill(''));

  useEffect(() => {
    if (!tried) {
      inputArr[0].current.focus();
    }
  }, []);

  const onChange = (i) => (e) => {
    const newValues = [...values];
    newValues[i] = e.target.value;
    if (i !== 4 && e.target.value.length === 1) {
      inputArr[i + 1].current.focus();
    }
    setValues(newValues);
  };

  const pressBackSpace = (e) => {
    const {
      target: { value, id },
      key,
    } = e;
    if (value === '' && key === 'Backspace' && id !== '0') {
      inputArr[id - 1].current.focus();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    checkAnswer(values);
  };

  const render = () => {
    const tmp = [];

    for (let i = 0; i < 5; i++) {
      tmp.push(
        <li>
          {tried ? (
            <Span result={history[i]}>{values[i]}</Span>
          ) : (
            <Input
              maxLength="1"
              ref={inputArr[i]}
              id={i}
              onChange={onChange(i)}
              onKeyDown={pressBackSpace}
              correct={correct}
            />
          )}
        </li>
      );
    }

    return tmp;
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledUl>
        {render()}
        <button type="submit" style={style}></button>
      </StyledUl>
    </form>
  );
};

export default Square;
