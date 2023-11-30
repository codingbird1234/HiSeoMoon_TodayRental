import { styled } from 'styled-components';
import Product from './Product';

function ProductList() {
  const products = [
    {
      productName: '만능 공구상자',
      rentalTerm: '2021-09-01 ~ 2021-09-30',
      address: '대구광역시 북구 대학로 80',
      rentalCost: '총 30000원',
      howMany: '3',
      productImage: '/images/tools.png',
    },
    {
      productName: '만능 공구상자',
      rentalTerm: '2021-09-01 ~ 2021-09-30',
      address: '대구광역시 북구 대학로 80',
      rentalCost: '총 30000원',
      howMany: '3',
      productImage: '/images/tools.png',
    },
  ];
  return (
    <ProductsContainer>
      {products.map((product) => {
        return (
          <div>
            <Product product={product}></Product>
            <MiniSeperator></MiniSeperator>
          </div>
        );
      })}
    </ProductsContainer>
  );
}

export default ProductList;

const ProductsContainer = styled.div`
  width: 100%;
  height: 100%;
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 40px 0px;
`;

const MiniSeperator = styled.div`
  width: 800px;
  height: 1px;
  background-color: #999;
  margin: 10px 0px;
`;
