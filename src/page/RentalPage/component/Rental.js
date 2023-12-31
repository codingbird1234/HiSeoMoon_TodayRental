import { styled } from 'styled-components';
import ProductList from './ProductList';

function Rental() {
  return (
    <RentalBox>
      <Title>대여하기</Title>
      <Seperator></Seperator>
      <ProductList></ProductList>
    </RentalBox>
  );
}

export default Rental;

const RentalBox = styled.div`
  //width: 1000px;
  height: 100%;
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

const Title = styled.h2`
  font-size: 40px;
  margin: 60px;
`;

const Seperator = styled.div`
  width: 80vw;
  height: 0px;
  border: 1px solid black;
  margin: 0px 10px;
  margin-bottom: 40px;
`;
