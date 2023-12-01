import { styled } from 'styled-components';

function BasicPage() {
  return <BasicPageBox></BasicPageBox>;
}

export default BasicPage;

const BasicPageBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  //border: 1px solid black;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20%; /* 그라데이션 적용되는 영역의 높이를 조절 */
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 1) 90%
    ); /* 그라데이션 설정 */
  }

  background-image: url('/images/today_rental_1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// 위쪽만 투명하게 하고 싶을 때
