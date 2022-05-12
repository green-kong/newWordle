import styled from 'styled-components';

const StyledUl = styled.ul`
  width: 100%;

  .rule_title {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 25px;
  }

  .rule_info {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .rule_info_sub {
    font-size: 16px;
    margin-bottom: 8px;
    margin-top: 8px;
    margin-left: 40px;
  }
`;

const StyledUlRender = ({ children, ...props }) => {
  return <StyledUl {...props}>{children}</StyledUl>;
};

export default StyledUlRender;
