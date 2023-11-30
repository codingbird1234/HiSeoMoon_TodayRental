import { styled } from 'styled-components';
import ProductList from './ProductList';

function My() {
  const profileImage = '/images/profile.png';
  const getNickname = () => {
    return localStorage.getItem('todayRentalNickname');
  };
  const getId = () => {
    return localStorage.getItem('todayRentalId');
  };
  const getPhoneNumber = () => {
    return localStorage.getItem('todayRentalPhoneNumber');
  };
  return (
    <MyBox>
      <UserInfoBox>
        <ProfileImage src={profileImage}></ProfileImage>
        <UserInfo>
          <UserInfoText>이름 : {getNickname()}</UserInfoText>
          <UserInfoText>ID : {getId()}</UserInfoText>
          <UserInfoText>전화번호 : {getPhoneNumber()}</UserInfoText>
        </UserInfo>
      </UserInfoBox>
      <RentalBox>
        <MiniTitle>대여 중인 물품</MiniTitle>
        <Seperator></Seperator>
        <ProductList></ProductList>
      </RentalBox>
    </MyBox>
  );
}

export default My;

const MyBox = styled.div`
  width: 1000px;
  height: 1000px;
  //border: 1px solid black;
  border-radius: 100px;
  margin: 100px 0px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
`;

const UserInfoBox = styled.div`
  width: 900px;
  height: 200px;
  border: 1px solid black;
  border-radius: 100px;
  margin: 50px 0px;
  display: flex;
  flex-direction: row;
  //justify-content: center;
  align-items: center;
  //box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0px 50px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
`;

const UserInfo = styled.div`
  width: 500px;
  height: calc(100% - 100px);
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0px;
  //justify-content: center;
  //align-items: center;
`;

const UserInfoText = styled.h5`
  font-size: 20px;
  font-weight: 500;
  margin: 10px;
  //border: 1px solid black;
  margin: 0px 20px;
`;

const RentalBox = styled.div`
  width: 900px;
  height: 400px;
  //border: 1px solid black;
  border-radius: 50px;
  margin: 0px 0px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //align-items: center;
  //box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
`;

const MiniTitle = styled.h2`
  font-size: 35px;
  font-weight: 500;
  margin: 30px;
`;

const Seperator = styled.div`
  width: 880px;
  height: 0px;
  border: 1px solid black;
  margin: 0px 10px;
`;
