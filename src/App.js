import { styled } from 'styled-components';
import TopBar from './component/TopBar';
import Body from './component/Body';
function App() {
  return (
    <Window>
      <TopBar></TopBar>
      <Body></Body>
    </Window>
  );
}

export default App;

const Window = styled.div`
  width: 100%;
  height: 100%;
`;
