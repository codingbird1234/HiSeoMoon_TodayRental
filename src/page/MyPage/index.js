import { styled } from 'styled-components';
import My from './component/My';

function MyPage() {
  return (
    <MyPageBox>
      <Title>마이페이지</Title>
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
  //justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 40px;
  margin-top: 60px;
`;

const Seperator = styled.div`
  width: 80vw;
  height: 0px;
  border: 1px solid black;
  margin: 0px 10px;
`;
