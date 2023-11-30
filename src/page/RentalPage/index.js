import { styled } from 'styled-components';
import Rental from './component/Rental';

function RentalPage() {
  return (
    <RentalPageBox>
      <Rental></Rental>
    </RentalPageBox>
  );
}

export default RentalPage;

const RentalPageBox = styled.div`
  width: 100%;
  height: 100%;
  //border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  //align-items: center;
`;
