import { styled } from 'styled-components';
import Login from './component/Login';

function LoginPage({ setIsLogin }) {
  return (
    <LoginPageBox>
      <Login setIsLogin={setIsLogin}></Login>
    </LoginPageBox>
  );
}

export default LoginPage;

const LoginPageBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
