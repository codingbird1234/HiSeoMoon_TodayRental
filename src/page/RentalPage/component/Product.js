import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Product({ product, setProductId }) {
  const navigate = useNavigate();
  const goToProductDetailPage = () => {
    navigate('/rental/100');
  };
  return (
    <ProductBox onClick={goToProductDetailPage}>
      <ProductImage src={product.productImage}></ProductImage>
      <ProductInfo>
        <Container>
          <ProductName>{product.productName}</ProductName>
          <RentalTermStandard>
            {product.rentalTermStandard} 단위로 대여가능
          </RentalTermStandard>
        </Container>
        <RentalCost>{product.rentalCost}원</RentalCost>
      </ProductInfo>
    </ProductBox>
  );
}

export default Product;

const ProductBox = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #999;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //box-shadow: 0 0px 10px rgba(0, 0, 0, 1);
  padding: 10px;
  //margin: 10px;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin: 15px;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
`;

const ProductInfo = styled.div`
  width: 90%;
  height: 100px;
  //border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 15px;
  padding: 0px 20px;
  gap: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ProductName = styled.h3`
  font-size: 20px;
  font-weight: 600;
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

const RentalTermStandard = styled.h5`
  font-size: 13px;
  font-weight: 300;
  margin: 0px;
`;
