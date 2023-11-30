import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function TopBar({ isLogin, setIsLogin }) {
  const navigate = useNavigate();
  const goToLoginPage = () => {
    if (!isLogin) {
      navigate('/login');
    } else {
      setIsLogin(false);
      localStorage.removeItem('todayRentalIsLogin');
      alert('로그아웃 되었습니다');
      navigate('/');
    }
  };
  const goToHomePage = () => {
    navigate('/');
  };
  const goToMyPage = () => {
    navigate('/mypage');
  };
  return (
    <TopBarBox>
      <ServiceName onClick={goToHomePage}>서비스 이름</ServiceName>
      <Container>
        <MenuBox>
          <MenuButton>메뉴 1</MenuButton>
          <MenuButton>대여하기</MenuButton>
          {isLogin && <MenuButton onClick={goToMyPage}>마이페이지</MenuButton>}
          <LoginButton onClick={goToLoginPage}>
            {isLogin ? 'Logout' : 'Login'}
          </LoginButton>
        </MenuBox>
      </Container>
    </TopBarBox>
  );
}

export default TopBar;

const TopBarBox = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ServiceName = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-left: 20px;
  cursor: pointer;
`;

const Container = styled.div`
  border: 1px solid black;
  margin-right: 50px;
`;

const UserText = styled.h5`
  font-size: 20px;
  font-weight: 500;
`;

const MenuBox = styled.div`
  //border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MenuButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  margin: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }
`;

const LoginButton = styled.button`
  color: white;
  background-color: #0033b5;
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  margin: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
    background-color: #08246c;
    transition: 0.5s;
  }
`;
