import { styled } from 'styled-components';
import Product from './Product';
import productList from '../../../assets/products.json';

function ProductList() {
  const products = Object.values(productList);
  return (
    <ProductListBox>
      {products.map((product) => {
        return <Product product={product}></Product>;
      })}
    </ProductListBox>
  );
}

export default ProductList;

const ProductListBox = styled.div`
  width: 1000px;
  padding: 20px;
  //border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  row-gap: 40px;
`;
