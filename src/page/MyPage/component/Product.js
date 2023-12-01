import { styled } from 'styled-components';

function Product({ product }) {
  return (
    <Container>
      <ProductImage src={product.productImage}></ProductImage>
      <ProductInfo>
        <ProductName>{product.productName}</ProductName>
        <Number>대여 수량 : {product.howMany}개</Number>
        <RentalTerm>
          {product.rentalDate} ~ {product.returnDate}
        </RentalTerm>
        <Address>{product.address}</Address>
        <RentalCost>{product.rentalCostTotal}원</RentalCost>
      </ProductInfo>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  width: 800px;
  height: 150px;
  //border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  //box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
`;

const ProductImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  margin: 0px 15px;
`;

const ProductInfo = styled.div`
  width: 500px;
  height: 120px;
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 15px;
  padding: 0px 10px;
  gap: 5px;
`;

const ProductName = styled.h3`
  font-size: 25px;
  font-weight: 600;
  margin: 0px;
`;

const RentalTerm = styled.h5`
  font-size: 13px;
  font-weight: 300;
  margin: 0px;
`;

const Number = styled.h5`
  font-size: 15px;
  font-weight: 500;
  margin: 0px;
`;

const RentalCost = styled.h5`
  font-size: 30px;
  font-weight: 500;
  margin: 0px;
`;

const Address = styled.h5`
  font-size: 12px;
  font-weight: 500;
  margin: 0px;
`;
