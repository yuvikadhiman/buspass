import styled from 'styled-components';
import { DestinationCard, PassForm } from './';

const Wrapper = styled.div``;
const Banner = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  object-position: center;
  filter: brightness(40%);
`;
const TextContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    color: white;
    font-size: 3.5rem;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 4px;
    span {
      color: rgb(221, 20, 50);
    }
  }
  p {
    text-align: center;
    color: white;
    font-size: 1.2rem;
  }
`;

const JourneyCard = styled.div`
  display: block;
  margin: 5rem auto;
  width: 840px;
`;

const JourneyCardDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 16px 20px;
  color: #676f82;
  border-radius: 6px;
`;
const JourneyCardTitle = styled.div`
  text-transform: capitalize;
  font-size: 16px;
`;
const JourneyCardDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: #676f82;
  gap: 1rem;
`;
const FindMyJourney = () => {
  return (
    <Wrapper>
      <Banner
        src="https://www.protolabs.com/media/xikbed3z/buses-parked.jpg"
        alt=""
      />
      <TextContainer>
        <h1>
          Find next place to <span>Visit</span>
        </h1>
        <p>Your traveling satisfaction will be more exciting!</p>
      </TextContainer>
      <PassForm />
      <JourneyCard>
        <JourneyCardDescription>
          <JourneyCardTitle>Service Provider</JourneyCardTitle>
          <JourneyCardDetails>
            <p>Dep Time</p>
            <p>Arr time</p>
            <p>Fare</p>
          </JourneyCardDetails>
        </JourneyCardDescription>
        <DestinationCard />
      </JourneyCard>
    </Wrapper>
  );
};

export default FindMyJourney;
