import { styled } from 'styled-components';

function BasicPage() {
  return <BasicPageBox>Hello, World!</BasicPageBox>;
}

export default BasicPage;

const BasicPageBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;
