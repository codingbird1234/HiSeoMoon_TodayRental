import { styled } from 'styled-components';

function Body({ children }) {
  return <BodyBox>{children}</BodyBox>;
}

export default Body;

const BodyBox = styled.div`
  width: 100%;
  min-height: 100%;
  max-height: 1500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  //align-items: center;
`;
