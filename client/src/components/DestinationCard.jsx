import styled from 'styled-components';
import { travelData } from '../utils/data';

const CardContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 20px 3%;
`;

const CardGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-items: center;
  margin: 0 auto;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  min-width: 200px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  padding: 5%;
  border-radius: 10px;
`;

const CardImage = styled.img`
  border-radius: 10px;
  width: 100%;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
`;

const CardButton = styled.button`
  background-color: #ffc700;
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--hoverBtn);
  }
`;

const DestinationCard = () => {
  return (
    <CardContainer>
      <CardGrid>
        {travelData.map((data) => (
          <Card key={data.id}>
            <CardContent>
              <CardImage src={data.image} alt="Destination" />
              <CardTitle>{data.text}</CardTitle>
              <CardButton>Book Now</CardButton>
            </CardContent>
          </Card>
        ))}
      </CardGrid>
    </CardContainer>
  );
};

export default DestinationCard;
