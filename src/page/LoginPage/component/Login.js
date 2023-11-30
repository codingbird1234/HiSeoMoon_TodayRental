import { styled } from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isPwVisible, setIsPwVisible] = useState(false);
  const togglePwVisible = () => {
    setIsPwVisible(!isPwVisible);
  };
  const navigate = useNavigate();
  const goToSignUpPage = () => {
    navigate('/signup');
  };
  return (
    <LoginBox>
      <LoginTitle>LOGIN</LoginTitle>
      <LoginInputBox>
        <InputName>ID</InputName>
        <InputContent
          value={id}
          placeholder="Enter your id"
          onChange={(e) => setId(e.target.value)}
        ></InputContent>
      </LoginInputBox>
      <LoginInputBox>
        <InputName>PW</InputName>
        <InputContent
          value={pw}
          type={!isPwVisible && 'password'}
          placeholder="Enter your password"
          onChange={(e) => setPw(e.target.value)}
        ></InputContent>
      </LoginInputBox>
      <MiddleBox>
        <ToggleButton onClick={togglePwVisible}>
          {isPwVisible ? '비밀번호 숨기기' : '비밀번호 보기'}
        </ToggleButton>
        <SignInButton onClick={goToSignUpPage}>sign in</SignInButton>
      </MiddleBox>
      <SubmitButton>로그인</SubmitButton>
    </LoginBox>
  );
}

export default Login;

const LoginBox = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0px 50px rgba(0, 0, 0, 0.1);
`;

const LoginTitle = styled.p`
  font-size: 50px;
  font-weight: 400;
  margin: 50px 0px;
`;

const LoginInputBox = styled.div`
  width: 400px;
  height: 60px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InputName = styled.text`
  margin-left: 20px;
  font-size: 23px;
  font-weight: 600;
`;

const InputContent = styled.input`
  width: 280px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #f4f4f4;
  font-size: 17px;
  font-weight: 500;
  padding: 0px 10px;
  margin-right: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #999; /* 원하는 색상으로 변경 */
  }
`;

const MiddleBox = styled.div`
  width: 250px;
  //height: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  margin: 20px;
`;

const ToggleButton = styled.button`
  width: 120px;
  height: 20px;
  border: none;
  background-color: #ffffff;
  color: #000000;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const SignInButton = styled.button`
  width: 120px;
  height: 20px;
  border: none;
  background-color: #ffffff;
  color: #000000;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ffffff;
  color: #000000;
  font-size: 20px;
  font-weight: 600;
  margin: 30px 0px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
