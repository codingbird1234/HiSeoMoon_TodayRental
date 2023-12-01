import { styled } from 'styled-components';
import Product from './Product';

function ProductList() {
  let products = [];
  if (localStorage.getItem('rentalList')) {
    products = JSON.parse(localStorage.getItem('rentalList'));
  }
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
      {products.length === 0 && <div>대여한 상품이 없습니다.</div>}
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
