import styled from "styled-components";
import { buses } from "../utils/data";

const CardContainer = styled.div`
  margin-top: 10px;
  background-color: #ffffff;
  padding: 40px 20px;
  width: 800px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
const ServiceProvider = styled.div`
  p:nth-child(1) {
    font-size: 18px;
    color: #5e6fa2;
    font-weight: 600;
    padding: 5px 0;
  }
  & {
    font-size: 16px;
  }
  span {
    font-weight: 500;
  }
`;
const ServiceProviderDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: #000000;
  gap: 1rem;
  button {
    border: none;
    cursor: pointer;
    width: 100px;
    color: white;
    background-color: rgb(221, 20, 50);
    border-radius: 4px;
    padding: 8px 5px;
    margin-top: 1rem;
  }
`;

const DestinationCard = () => {
  return (
    <>
      {buses.map((item) => {
        return (
          <CardContainer key={item?.id}>
            <ServiceProvider>
              <p>{item?.name}</p>
              <p>
                <span>Route : </span>
                {`${item?.from} to ${item?.to}`}
              </p>
              <p>
                <span>Boarding Point : </span>
                {item?.boardingPoint}
              </p>
            </ServiceProvider>
            <ServiceProviderDetails>
              <p>{item?.departureTime}</p>
              <p>{item?.arrivalTime}</p>
              <p>
                {item?.price}
                <button>Book my pass</button>
              </p>
            </ServiceProviderDetails>
          </CardContainer>
        );
      })}
    </>
  );
};

export default DestinationCard;
