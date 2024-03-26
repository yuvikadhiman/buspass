import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.main`
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const TextStyle = styled.div`
  color: rgb(221, 20, 50);
  font-size: 50px;
  font-weight: 600;
`;

const FailedMsg = styled.p`
  font-size: 20px;
  color: grey;
  font-weight: 600;
`;
const BackHome = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 30px;
  font-weight: 600;
`;

const PaymentFail = () => {
  return (
    <Wrapper>
      <TextStyle>Payment Failed</TextStyle>
      <FailedMsg>Any amount deducted will be refunded within 48 hrs</FailedMsg>

      <BackHome to="/dashboard">Back Home</BackHome>
    </Wrapper>
  );
};
export default PaymentFail;
