import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid black;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

const Header = () => {
  return <StyledHeader>WORDLE</StyledHeader>;
};

export default Header;
