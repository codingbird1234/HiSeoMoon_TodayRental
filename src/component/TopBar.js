import { styled } from 'styled-components';

function TopBar() {
  return (
    <TopBarBox>
      <ServiceName>서비스 이름</ServiceName>
      <MenuBox>
        <MenuButton>메뉴 1</MenuButton>
        <MenuButton>메뉴 2</MenuButton>
        <MenuButton>메뉴 3</MenuButton>
        <MenuButton style={{ color: '#ffffff', backgroundColor: '#0033B5' }}>
          login
        </MenuButton>
      </MenuBox>
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
`;

const MenuBox = styled.div`
  //border: 1px solid black;
  margin-right: 50px;
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
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    background-color: #aec4fb;
    color: white;
    transition: 0.5s;
  }
`;
