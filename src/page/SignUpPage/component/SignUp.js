import { styled } from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [isAgree, setIsAgree] = useState(false);
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailName, setEmailName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const navigate = useNavigate();
  const [isPwVisible, setIsPwVisible] = useState(false);
  const [isPwCheckVisible, setIsPwCheckVisible] = useState(false);
  const togglePwVisible = () => {
    setIsPwVisible(!isPwVisible);
  };
  const togglePwCheckVisible = () => {
    setIsPwCheckVisible(!isPwCheckVisible);
  };

  const toggleIsAgree = () => {
    setIsAgree(!isAgree);
  };
  const signUp = () => {
    if (nickname === '') {
      alert('닉네임을 입력해주세요.');
    } else if (id === '') {
      alert('아이디를 입력해주세요.');
    } else if (pw === '') {
      alert('비밀번호를 입력해주세요.');
    } else if (pw !== pwCheck) {
      alert('비밀번호가 일치하지 않습니다.');
    } else if (emailName === '' || emailAddress === '') {
      alert('이메일을 입력해주세요.');
    } else if (!isAgree) {
      alert('개인정보 제공에 동의해주세요.');
    } else if (phoneNumber === '') {
      alert('휴대폰 번호를 입력해주세요.');
    } else {
      localStorage.setItem('todayRentalId', id);
      localStorage.setItem('todayRentalPw', pw);
      localStorage.setItem('todayRentalNickname', nickname);
      localStorage.setItem('todayRentalPhoneNumber', phoneNumber);
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    }
  };
  return (
    <SignUpBox>
      <Title>회원가입</Title>
      <Container>
        <InfoInputBox>
          <InfoName>닉네임</InfoName>
          <InfoInput
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요"
          ></InfoInput>
        </InfoInputBox>
        <InfoInputBox>
          <InfoName>아이디</InfoName>
          <InfoInput
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력하세요"
          ></InfoInput>
        </InfoInputBox>
        <InfoInputBox>
          <InfoName>비밀번호</InfoName>
          <InfoInput
            type={!isPwVisible && 'password'}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          ></InfoInput>
          <ToggleButton onClick={togglePwVisible}>비밀번호 보기</ToggleButton>
        </InfoInputBox>
        <InfoInputBox>
          <InfoName>비밀번호 확인</InfoName>
          <InfoInput
            type={!isPwCheckVisible && 'password'}
            value={pwCheck}
            onChange={(e) => setPwCheck(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          ></InfoInput>
          <ToggleButton onClick={togglePwCheckVisible}>
            {isPwCheckVisible ? '비밀번호 숨기기' : '비밀번호 보기'}
          </ToggleButton>
        </InfoInputBox>
        <InfoInputBox>
          <InfoName>휴대폰 번호</InfoName>
          <InfoInput
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="전화번호를 입력하세요"
          ></InfoInput>
        </InfoInputBox>
        <InfoInputBox>
          <InfoName>이메일 주소</InfoName>
          <EmailInputBox>
            <EmailNameInput
              value={emailName}
              onChange={(e) => setEmailName(e.target.value)}
              placeholder="이메일을 입력하세요"
            ></EmailNameInput>
            @
            <EmailAddressInput
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="이메일 주소를 입력하세요"
            ></EmailAddressInput>
          </EmailInputBox>
        </InfoInputBox>
      </Container>
      <AgreementBox>
        <AgreementContent>개인정보 제공에 동의하시겠습니까?</AgreementContent>
        <Container>
          <CheckBoxContainer>
            <CheckBox checked={isAgree} onChange={toggleIsAgree}></CheckBox>
            <CheckBoxLabel>동의합니다.</CheckBoxLabel>
          </CheckBoxContainer>
        </Container>
      </AgreementBox>
      <SubmitButton onClick={signUp}>완료</SubmitButton>
    </SignUpBox>
  );
}

export default SignUp;

const SignUpBox = styled.div`
  width: 1000px;
  height: 1000px;
  margin: 100px 0px;
  //border: 1px solid black;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin: 100px;
`;

const Container = styled.div``;

const InfoInputBox = styled.div`
  width: 800px;
  height: 60px;
  display: flex;
  flex-direction: row;
  //justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

const InfoName = styled.h3`
  width: 120px;
  font-size: 20px;
  font-weight: 600;
  margin: 20px;
`;

const InfoInput = styled.input`
  width: 500px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #f4f4f4;
  font-size: 17px;
  font-weight: 500;
  padding: 0px 10px;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #999; /* 원하는 색상으로 변경 */
  }
`;

const EmailInputBox = styled.div`
  width: 520px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const EmailNameInput = styled.input`
  width: 240px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #f4f4f4;
  font-size: 17px;
  font-weight: 500;
  padding: 0px 10px;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #999; /* 원하는 색상으로 변경 */
  }
`;

const EmailAddressInput = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #f4f4f4;
  font-size: 17px;
  font-weight: 500;
  padding: 0px 10px;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #999; /* 원하는 색상으로 변경 */
  }
`;

const AgreementBox = styled.div`
  width: 500px;
  height: 100px;
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AgreementContent = styled.h6`
  font-size: 15px;
  font-weight: 500;
  margin: 10px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

const CheckBoxLabel = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin: 10px;
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

const ToggleButton = styled.button`
  width: 120px;
  height: 20px;
  border: none;
  background: none;
  color: #000000;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
