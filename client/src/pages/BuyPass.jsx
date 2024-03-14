import styled from "styled-components";
import { DestinationCard } from "../components";
const BuyPass = () => {
  return (
    <>
      <JourneyForm action="">
        <h4>Book Pass</h4>
        <JourneyInput type="text" placeholder="From" />
        <JourneyInput type="text" placeholder="To" />
        <JourneyButton type="submit">Find My Journey</JourneyButton>
      </JourneyForm>
      <BusPass>
        <DestinationCard />
      </BusPass>
    </>
  );
};
export default BuyPass;

const JourneyForm = styled.form`
  display: block;
  margin: auto;
  width: 80%;
  background-color: #ffffff;
  border-radius: var(--borderRadius);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 3px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem 2.5rem;
  margin: 3rem auto;
  transition: 0.3s ease-in-out all;
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  h4 {
    margin-left: 8px;
  }
`;
const JourneyInput = styled.input`
  margin: 0 8px;
  width: 45%;
  height: 2.5rem;
  border: 0.1px solid gainsboro;
  padding-left: 10px;
  border-radius: 4px;
  color: #767676;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(255, 196, 201, 0.318);
  }
`;

const JourneyButton = styled.button`
  border: none;
  cursor: pointer;
  width: 170px;
  color: white;
  background-color: rgb(221, 20, 50);
  border-radius: 4px;
  margin-left: 0.5rem;
  margin-top: 1rem;
  padding: 12px;
`;
const BusPass = styled.div`
   display: block;
  margin: auto;
  width: 80%;
  
`;
const passes = [
  {
    id: 1,
    name: "Himachal Express",
    from: "Shimla",
    to: "Solan",
    boardingPoint: "Shimla Bus Stand",
    arrivalTime: "12:00 PM",
    departureTime: "9:00 AM",
    price: "500 INR",
  },
  {
    id: 2,
    name: "Himalayan Queen",
    from: "Shimla",
    to: "Domeher",
    boardingPoint: "ISBT Shimla",
    arrivalTime: "3:30 PM",
    departureTime: "12:00 PM",
    price: "600 INR",
  },
  {
    id: 3,
    name: "Shivalik Deluxe",
    from: "Domeher",
    to: "Solan",
    boardingPoint: "Victory Tunnel, Shimla",
    arrivalTime: "5:30 PM",
    departureTime: "3:00 PM",
    price: "400 INR",
  },
  {
    id: 4,
    name: "HRTC Volvo",
    from: "Domeher",
    to: "Shimla",
    boardingPoint: "Tutikandi, Shimla",
    arrivalTime: "8:00 PM",
    departureTime: "4:00 PM",
    price: "1000 INR",
  },
];
