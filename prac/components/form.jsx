import styled from 'styled-components';

const StyledForm = styled.form`
  width: 300px;
`;

const Form = ({ children, ...props }) => {
  return (
    <StyledForm {...props}>
      <ul>{children}</ul>
    </StyledForm>
  );
};

export default Form;
