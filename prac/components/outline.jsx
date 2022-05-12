import styled from 'styled-components';

const OutlineDiv = styled.div`
  padding: 0;
  width: 600px;
  margin: 0 auto;
`;

const Outline = ({ children }) => {
  return <OutlineDiv>{children}</OutlineDiv>;
};

export default Outline;
