import styled from 'styled-components';
import { PassForm } from './';

const Wrapper = styled.div`
  display: flex;
  margin: 100px;
`;

const BuyPassForm = () => {
  return (
    <Wrapper>
      <PassForm />
    </Wrapper>
  );
};
export default BuyPassForm;
