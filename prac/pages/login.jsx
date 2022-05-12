import CenterDiv from '../components/divCenter';
import Form from '../components/form';
import Input from '../components/input';
import StyledButton2 from '../components/button2';
import Link from 'next/link';
import StyledButton from '../components/button';
import SpaceDiv from '../components/divSpace';
import useForm from '../hooks/useForm';

import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loginValidate } from '../util/validation/login';

import userActions from '../reducer/user/userActions';

const Login = () => {
  const initialState = {
    Email: '',
    password: '',
  };

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.isLogin) {
      (function () {
        Router.push('/');
      })();
    }
  }, [user]);

  const submitHandler = (values) => {
    dispatch(userActions.loginRequest(values));
  };

  const { onChange, onSubmit, errors, values } = useForm(
    initialState,
    loginValidate,
    submitHandler
  );

  return (
    <CenterDiv>
      <Form onSubmit={onSubmit}>
        <CenterDiv flex="none">
          <Input id="Email" name="Email" onChange={onChange} />
          {errors.Email && <span>{errors.Email}</span>}
          <Input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
          />
          {errors.password && <span>{errors.password}</span>}
          <SpaceDiv w="220px">
            <StyledButton2 type="submit">로그인</StyledButton2>
            <Link href="/join">
              <StyledButton>회원가입</StyledButton>
            </Link>
          </SpaceDiv>
        </CenterDiv>
      </Form>
    </CenterDiv>
  );
};

export default Login;
