import { styled } from 'styled-components';

function Body({ children }) {
  return <BodyBox>{children}</BodyBox>;
}

export default Body;

const BodyBox = styled.div`
  width: 100%;
  height: 1500px;
`;
