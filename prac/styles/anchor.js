import styled from 'styled-components';

const Anchor = styled.a`
  color: ${(props) => (props.color ? props.color : '#333')};
  &:hover {
    color: dodgerblue;
  }
`;

const StyledAnchor = ({ children, ...props }) => {
  return <Anchor {...props}>{children}</Anchor>;
};

export default StyledAnchor;
