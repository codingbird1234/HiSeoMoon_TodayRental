import { styled } from 'styled-components';

function BasicPage() {
  return <BasicPageBox></BasicPageBox>;
}

export default BasicPage;

const BasicPageBox = styled.div`
  width: 100%;
  height: 100%;
  //border: 1px solid black;
  background-image: url('/images/today_rental2.png');
  background-size: cover; /* 배경 이미지 크기 설정 (cover, contain 등) */
  background-position: center; /* 배경 이미지 위치 설정 */
  background-repeat: no-repeat;
`;
