import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import TopBar from './component/TopBar';
import Body from './component/Body';
import LoginPage from './page/LoginPage';
import BasicPage from './page/BasicPage';
import SignUpPage from './page/SignUpPage';
import MyPage from './page/MyPage';
import RentalPage from './page/RentalPage';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('todayRentalIsLogin') !== null) {
      setIsLogin(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <Window>
        <TopBar isLogin={isLogin} setIsLogin={setIsLogin}></TopBar>
        <Body>
          <Routes>
            <Route path="/" element={<BasicPage></BasicPage>} />
            <Route
              path="/login"
              element={<LoginPage setIsLogin={setIsLogin} />}
            />
            <Route path="/signup" element={<SignUpPage></SignUpPage>} />
            <Route path="/mypage" element={<MyPage></MyPage>} />
            <Route
              path="/rental"
              element={<RentalPage isLogin={isLogin}></RentalPage>}
            />
          </Routes>
        </Body>
      </Window>
    </BrowserRouter>
  );
}

export default App;

const Window = styled.div`
  width: 100%;
  height: 100%;
`;
