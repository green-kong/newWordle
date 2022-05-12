import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  border: 2px solid ${(props) => (props.color ? props.color : 'dodgerblue')};
  border-radius: 10px;
  width: ${(props) => (props.w ? props.w : '100px')};
  height: 35px;
  color: ${(props) => (props.color ? props.color : 'dodgerblue')};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  margin-top: ${(props) => (props.mt ? props.mt : '')};
  :hover {
    background-color: ${(props) => (props.color ? props.color : 'dodgerblue')};
    color: white;
  }
`;

const StyledButton2 = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default StyledButton2;
