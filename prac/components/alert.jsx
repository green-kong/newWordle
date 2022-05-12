import styled from 'styled-components';

const StyledSpan = styled.span`
  font-size: 14px;
  color: red;
  margin-bottom: ${(props) => props.mb || 0};
`;

const Alert = ({ children, ...props }) => {
  return <StyledSpan {...props}>{children}</StyledSpan>;
};

export default Alert;
