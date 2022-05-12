import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.flex === 'none' ? '' : 'center')};
  align-items: ${(props) => (props.flex === 'none' ? 'center' : '')};
  margin-top: ${(props) => (props.mt ? props.mt : '30px')};
  flex-direction: ${(props) => (props.flex === 'none' ? 'column' : '')};
`;

const StyledBorderDiv = styled.div`
  background-color: white;
  border: 3px solid ${(props) => (props.color ? props.color : 'dodgerblue')};
  border-radius: 10px;
  width: ${(props) => (props.w ? props.w : '100px')};
  height: ${(props) => (props.h ? props.h : '35px')};
  color: black;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  line-height: 32px;
  text-align: center;
  box-sizing: border-box;
  margin-top: ${(props) => (props.mt ? props.mt : '')};
`;

export const BorderDiv = ({ children, ...props }) => {
  return <StyledBorderDiv {...props}>{children}</StyledBorderDiv>;
};

const CenterDiv = ({ children, ...props }) => {
  return <StyledDiv {...props}>{children}</StyledDiv>;
};

export default CenterDiv;
