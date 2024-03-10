import styled from 'styled-components';
import { prosData } from '../utils/data.js';

const Container = styled.div`
  margin: 4rem 6rem;
  display: grid; /* Enable grid context for media queries */
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Start with 4 columns */
  gap: 1rem;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr); /* Reduce to 2 columns */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  justify-items: space-between;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  gap: 1rem;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 100%;
  min-width: 200px;
  gap: 15px;
`;

const CardTitle = styled.p`
  font-size: 20px;
  margin-left: 25px;
`;

const CardDesc = styled.div`
  margin: 0 5%;
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-between;

  @media screen and (max-width: 1279px) {
    width: 85%;
  }
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: 100;
  @media (min-width: 650px) and (max-width: 700px) {
    font-size: 25px;
  }
  @media screen and (max-width: 649px) {
    font-size: 20px;
  }
`;

const LearnMoreButton = styled.a`
  background-color: #ffc700;
  color: white;
  font-weight: bold;
  border-radius: 50px;
  padding: 10px 20px;
  text-decoration: none;
  @media screen and (max-width: 700px) {
    padding: 7.5px 15px;
  }
`;

const LearnMoreCards = () => {
  return (
    <Container>
      <CardGrid>
        {prosData.map((card, index) => (
          <CardBody key={index}>
            <CardTitle>{card.desc}</CardTitle>
            <CardDesc>
              <Price>Rs 700</Price>
              <LearnMoreButton href={card.url}>Learn More</LearnMoreButton>
            </CardDesc>
          </CardBody>
        ))}
      </CardGrid>
    </Container>
  );
};

export default LearnMoreCards;
