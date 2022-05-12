import styled from 'styled-components';

const StyledInput = styled.input`
  width: 240px;
  height: 25px;
  padding: 0 10px 0;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = ({ children, ...props }) => {
  return (
    <>
      <li>
        <StyledLabel htmlFor={props.id}>{props.id}</StyledLabel>
      </li>
      <li>
        <StyledInput {...props}>{children}</StyledInput>
      </li>
    </>
  );
};

export default Input;
