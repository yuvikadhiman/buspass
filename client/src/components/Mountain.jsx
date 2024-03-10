import styled from 'styled-components';
import MountainImg from '../assets/Mountain.png';

const MountainImage = styled.div`
  background-image: url(${MountainImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 2rem;
  height: 20vh;
  align-items: center;
  background-color: white;
`;

const Heading = styled.div`
  font-size: 40px;
  width: 500px;
  margin-left: 15%;
  margin-bottom: -30px;
  @media screen and (max-width: 649px) {
    font-size: 30px;
    width: 300px;
  }
`;

const Wrapper = styled.div`
  padding-top: 2rem;
`;

const Mountain = () => {
  return (
    <Wrapper>
      <Heading>Your traveling satisfaction will be more exciting !</Heading>
      <MountainImage />
    </Wrapper>
  );
};

export default Mountain;
