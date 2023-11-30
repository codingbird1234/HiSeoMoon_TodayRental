import { styled } from 'styled-components';
import Login from './component/Login';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  return (
    <LoginPageBox>
      <Login></Login>
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
