import { styled } from 'styled-components';
import SignUp from './component/SignUp';

function SignUpPage() {
  return (
    <SignUpPageBox>
      <SignUp></SignUp>
    </SignUpPageBox>
  );
}

export default SignUpPage;

const SignUpPageBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
