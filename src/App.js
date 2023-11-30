import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { styled } from 'styled-components';
import TopBar from './component/TopBar';
import Body from './component/Body';
import LoginPage from './page/LoginPage';
import BasicPage from './page/BasicPage';
import SignUpPage from './page/SignUpPage';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Window>
        <TopBar></TopBar>
        <Body>
          <Routes>
            <Route path="/" element={<BasicPage></BasicPage>} />
            <Route
              path="/login"
              element={<LoginPage setIsLogin={setIsLogin} />}
            />
            <Route path="/signup" element={<SignUpPage></SignUpPage>} />
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
