import { styled } from 'styled-components';
import My from './component/My';

function MyPage() {
  return (
    <MyPageBox>
      <My></My>
    </MyPageBox>
  );
}

export default MyPage;

const MyPageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
