import StyledUlRender from '../styles/styledUl';
import StyledAnchor from '../styles/anchor';
import StyledButton from '../components/button';
import CenterDiv from '../components/divCenter';
import SpaceDiv from '../components/divSpace';
import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';
import StyledButton2 from '../components/button2';
import userActions from '../reducer/user/userActions';

const Index = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userActions.logout());
  };

  return (
    <StyledUlRender>
      <li className="rule_title">룰 설명</li>
      <li className="rule_info">
        1. 정답은 실제로 사용되는 5글자의 알파벳입니다.
        <StyledUlRender>
          <li className="rule_info_sub">겹치는 알파벳이 있을 수 있습니다.</li>
          <li className="rule_info_sub">ex) sleep, apple, etc...</li>
        </StyledUlRender>
      </li>
      <li className="rule_info">
        2. 다섯개의 칸에 알파벳 입력 후 엔터를 눌러서 제출 할 수 있습니다.
      </li>
      <li className="rule_info">
        3. 제출 후 결과는 아래 3가지로 나뉘어집니다.
      </li>
      <StyledUlRender>
        <li className="rule_info_sub">초록색 : 자리와 알파벳 모두 일치</li>
        <li className="rule_info_sub">
          노란색 : 알파벳은 일치하지만 자리는 일치하지 않음
        </li>
        <li className="rule_info_sub">회색 : 정답에 포함되지 않은 알파벳</li>
      </StyledUlRender>
      {user.isLogin ? (
        <>
          <CenterDiv>
            <SpaceDiv w="210px">
              <Link href="/game">
                <StyledButton href="/game">게임시작</StyledButton>
              </Link>
              <Link href="/ranking">
                <StyledButton href="/ranking">랭킹보기</StyledButton>
              </Link>
            </SpaceDiv>
          </CenterDiv>
          <CenterDiv mt="10px">
            <StyledButton2 w="210px" color="tomato" onClick={logout}>
              로그아웃
            </StyledButton2>
          </CenterDiv>
        </>
      ) : (
        <CenterDiv>
          <Link href="/login">
            <StyledButton href="/login">로그인</StyledButton>
          </Link>
        </CenterDiv>
      )}
      <CenterDiv>
        <li>
          Developer :{' '}
          <StyledAnchor href="https://github.com/green-kong">
            Github
          </StyledAnchor>{' '}
          <StyledAnchor href="https://kong-dev.tistory.com/">Blog</StyledAnchor>
        </li>
      </CenterDiv>
    </StyledUlRender>
  );
};

export default Index;
