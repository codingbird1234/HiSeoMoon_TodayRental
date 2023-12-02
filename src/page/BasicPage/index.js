import { styled } from 'styled-components';

function BasicPage() {
  return <BasicPageBox></BasicPageBox>;
}

export default BasicPage;

const BasicPageBox = styled.div`
  width: 100%;
  height: 1500px;

  //position: relative;
  //border: 1px solid black;
  /* &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 1) 90%
    );
  }*/

  background-image: url('/images/today_rental_3.png');
  background-size: cover;
  background-position: center;
`;

// 위쪽만 투명하게 하고 싶을 때
