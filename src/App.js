import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import TopBar from './component/TopBar';
import Body from './component/Body';
import LoginPage from './page/LoginPage';
import BasicPage from './page/BasicPage';
import SignUpPage from './page/SignUpPage';
import MyPage from './page/MyPage';
import RentalPage from './page/RentalPage';
import ProductDetailPage from './page/ProductDetailPage';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const productData = [
    {
      id: 100,
      name: '만능 공구세트',
    },
    {
      id: 101,
      name: '피크닉 세트',
    },
    {
      id: 102,
      name: '빔프로젝터 세트',
    },
  ];
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
            <Route
              path="/rental/:product"
              element={<ProductDetailPage></ProductDetailPage>}
            ></Route>
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
