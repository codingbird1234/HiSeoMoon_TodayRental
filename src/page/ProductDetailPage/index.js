import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import ProductDetail from './component/ProductDetail';

function ProductDetailPage() {
  const { product } = useParams();
  return (
    <ProductDetailBox>
      <ProductDetail></ProductDetail>
    </ProductDetailBox>
  );
}

export default ProductDetailPage;

const ProductDetailBox = styled.div`
  width: 100%;
  height: 1000px;
  //border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  //align-items: center;
`;
