import { styled } from 'styled-components';
import Product from './Product';

function ProductList() {
  const products = [
    {
      productName: '만능 공구상자',
      rentalTermStandard: '하루',
      remainProduct: 3,
      address: '대구광역시 북구 대학로 80',
      rentalCost: 9900,
      productImage: '/images/tools.png',
    },
    {
      productName: '피크닉 세트',
      rentalTermStandard: '하루',
      remainProduct: 3,
      address: '대구광역시 북구 대학로 80',
      rentalCost: 12000,
      productImage: '/images/picnic_set.png',
    },
    {
      productName: '빔 프로젝터 세트',
      rentalTermStandard: '하루',
      remainProduct: 3,
      address: '대구광역시 북구 대학로 80',
      rentalCost: 9900,
      productImage: '/images/beam_projector.png',
    },
    {
      productName: '만능 공구상자',
      rentalTermStandard: '하루',
      remainProduct: 3,
      address: '대구광역시 북구 대학로 80',
      rentalCost: 10000,
      productImage: '/images/tools.png',
    },
  ];
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
