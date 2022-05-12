import styled from 'styled-components';

const StyledDiv = styled.div`
  width: ${(props) => (props.w ? props.w : '100%')};
  display: flex;
  justify-content: space-between;
`;

const SpaceDiv = ({ children, ...props }) => {
  return <StyledDiv {...props}>{children}</StyledDiv>;
};

export default SpaceDiv;
