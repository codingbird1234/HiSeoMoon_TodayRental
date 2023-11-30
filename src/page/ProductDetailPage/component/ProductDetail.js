import { styled } from 'styled-components';
import productList from '../../../assets/products.json';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { product } = useParams();
  return (
    <ProductDetailBox>
      <Container>
        <ProductImage src={productList[product].productImage}></ProductImage>
        <ProductInfo>
          <ProductName>{productList[product].productName}</ProductName>
          <Address>반납장소 : {productList[product].address}</Address>
          <RentalTermStandard>
            {productList[product].rentalTermStandard} 단위로 대여가능
          </RentalTermStandard>
          <RentalCost>{productList[product].rentalCost}원</RentalCost>
        </ProductInfo>
      </Container>
      <Box>
        <RentalBox>
          <Text>대여기간</Text>
          <RentalInfoBox>
            <InputYear type="date"></InputYear>~
            <InputYear type="date"></InputYear>
          </RentalInfoBox>
          <Text>대여 수량</Text>
          <InputNumber type="number"></InputNumber>
          <Text>총 대여비용 1000</Text>
        </RentalBox>
        <RentalButton>대여하기</RentalButton>
      </Box>
    </ProductDetailBox>
  );
}

export default ProductDetail;

const ProductDetailBox = styled.div`
  //width: 100%;
  //height: 100%;
  border: 1px solid #999;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 40px 0px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  width: 1000px;
  height: 100%;
  //border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 400px;
  height: 400px;
  //border: 1px solid black;
  margin: 15px;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
`;

const ProductInfo = styled.div`
  width: 500px;
  height: 400px;
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 15px;
  padding: 0px 10px;
  gap: 5px;
`;

const ProductName = styled.h3`
  font-size: 40px;
  font-weight: 600;
  margin: 0px;
`;

const Address = styled.h5`
  font-size: 13px;
  font-weight: 600;
  margin: 0px;
`;

const RentalTermStandard = styled.h5`
  font-size: 13px;
  font-weight: 600;
  margin: 0px;
`;

const RentalCost = styled.h5`
  font-size: 50px;
  font-weight: 500;
  margin: 0px;
`;

const Box = styled.div`
  width: 1000px;
  height: 100%;
  //border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const RentalBox = styled.div`
  width: 480px;
  height: 250px;
  //border: 1px solid black;
  margin-left: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: flex-end;
`;

const RentalInfoBox = styled.div`
  width: 90%;
  height: 30px;
  //border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;
`;

const InputYear = styled.input`
  width: 120px;
  height: 30px;
  //border: 1px solid black;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  outline: none;
`;
const Text = styled.h5`
  font-size: 20px;
  font-weight: 500;
  margin: 5px;
`;

const InputNumber = styled.input`
  width: 50px;
  height: 30px;
  border: 1px solid black;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  outline: none;
  margin-bottom: 25px;
`;

const RentalButton = styled.button`
  width: 180px;
  height: 50px;
  border: none;
  border-radius: 25px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  background-color: #0033b5;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`;
