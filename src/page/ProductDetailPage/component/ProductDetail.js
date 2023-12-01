import { styled } from 'styled-components';
import productList from '../../../assets/products.json';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductDetail() {
  const navigate = useNavigate();
  const { product } = useParams();
  const [number, setNumber] = useState(0);
  const [rentalDate, setRentalDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [term, setTerm] = useState(0);
  const calculateRentalTerm = () => {
    // 날짜 형식의 문자열을 Date 객체로 변환
    const startDate = new Date(rentalDate);
    const endDate = new Date(returnDate);

    // 두 날짜의 차이 계산 (밀리초 단위)
    const timeDifference = endDate - startDate;

    // 밀리초를 일로 변환
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    setTerm(daysDifference);
    return daysDifference;
  };
  useEffect(() => {
    let thisTerm = calculateRentalTerm();
    if (thisTerm < 0) {
      alert('반납일은 대여일보다 빠를 수 없습니다.');
    }
  }, [rentalDate, returnDate]);

  const addRental = () => {
    if (term < 0) {
      alert('반납일은 대여일보다 빠를 수 없습니다.');
      return;
    }
    if (localStorage.getItem('rentalList') === null) {
      localStorage.setItem('rentalList', JSON.stringify([]));
    }

    let rentalListString = localStorage.getItem('rentalList');
    let rentalList = JSON.parse(rentalListString);
    rentalList.push({
      productName: `${productList[product].productName}`,
      howMany: `${number}`,
      rentalDate: `${rentalDate}`,
      returnDate: `${returnDate}`,
      address: `${productList[product].address}`,
      rentalCostPerOne: `${productList[product].rentalCost}`,
      rentalCostTotal: `${
        productList[product].rentalCost * number * (term + 1)
      }`,
      productImage: `${productList[product].productImage}`,
    });
    localStorage.setItem('rentalList', JSON.stringify(rentalList));
    alert('대여가 완료되었습니다.');
    navigate('/mypage');
  };
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
            <InputYear
              value={rentalDate}
              onChange={(e) => setRentalDate(e.target.value)}
              type="date"
            ></InputYear>
            ~
            <InputYear
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              type="date"
            ></InputYear>
          </RentalInfoBox>
          <Text>대여 수량</Text>
          <InputNumber
            value={number}
            onChange={(e) => {
              if (e.target.value < 0) {
                alert('수량은 음수가 될 수 없습니다.');
                return;
              }
              setNumber(e.target.value);
            }}
            type="number"
          ></InputNumber>
          <Cost>
            {productList[product].rentalCost * number * (term + 1) || 0}원
          </Cost>
        </RentalBox>
        <RentalButton onClick={addRental}>대여하기</RentalButton>
      </Box>
    </ProductDetailBox>
  );
}

export default ProductDetail;

const ProductDetailBox = styled.div`
  //width: 100%;
  height: 700px;
  border: 1px solid #999;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  margin: 40px 0px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
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
  height: 300px;
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
  width: 150px;
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

const Cost = styled.h5`
  font-size: 40px;
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
