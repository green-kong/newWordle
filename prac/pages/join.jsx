import useForm from '../hooks/useForm';
import Form from '../components/form';
import Input from '../components/input';
import CenterDiv from '../components/divCenter';
import StyledButton2 from '../components/button2';
import { joinValidate } from '../util/validation/join';
import userActions from '../reducer/user/userActions';
import Alert from '../components/alert';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

const Join = () => {
  const initialState = {
    Email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
  };

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(userActions.joinRequest(values));
  };

  const { onChange, onSubmit, errors, values } = useForm(
    initialState,
    joinValidate,
    submitHandler
  );

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.isLogin) {
      (function () {
        Router.push('/');
      })();
    }
  }, [user]);

  return (
    <CenterDiv>
      <Form onSubmit={onSubmit}>
        <CenterDiv flex="none">
          <Input name="Email" id="Email" onChange={onChange} />
          {errors.Email && <Alert>{errors.Email}</Alert>}
          {user.error && <Alert>{user.error}</Alert>}
          <Input
            type="password"
            name="password"
            id="password"
            onChange={onChange}
          />
          {errors.password && <Alert>{errors.password}</Alert>}
          {errors.passwordCheck && <Alert>{errors.passwordCheck}</Alert>}
          <Input
            type="password"
            name="passwordCheck"
            id="passwordCheck"
            onChange={onChange}
          />
          {errors.passwordCheck && <Alert>{errors.passwordCheck}</Alert>}
          <Input name="nickname" id="nickname" onChange={onChange} />
          {errors.nickname && <Alert>{errors.nickname}</Alert>}
          <StyledButton2 mt="10px" w="240px">
            회원가입
          </StyledButton2>
        </CenterDiv>
      </Form>
    </CenterDiv>
  );
};

export default Join;
