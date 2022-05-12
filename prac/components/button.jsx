import styled from 'styled-components';

const Button = styled.a`
  background-color: white;
  border: 2px solid dodgerblue;
  border-radius: 10px;
  width: 100px;
  height: 35px;
  color: dodgerblue;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  :hover {
    background-color: dodgerblue;
    color: white;
  }
`;

const StyledButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default StyledButton;
