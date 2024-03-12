import styled from 'styled-components';
import { PassCards } from '../components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
`;

const MyPass = () => {
  return (
    <Wrapper>
      <PassCards />
    </Wrapper>
  );
};
export default MyPass;
