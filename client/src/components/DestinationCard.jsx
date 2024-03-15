/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Loader from './Loader';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAppContext } from '../context/AppContext';

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

const DestinationCard = ({ allBuses }) => {
  const { authUser } = useAppContext();
  const buses = allBuses?.buses;

  const [busId, setBusId] = useState('');

  const handleSubmit = async () => {
    if (!authUser) {
      return toast.error('Please login first');
    }
    try {
      const res = await fetch(`/api/user/book`, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          busId,
        }),
      });

      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      toast.success(data.msg);
    } catch (error) {
      console.error('Error:', error);
      toast.error(error);
    }
  };

  if (!allBuses) {
    return <Loader />;
  }
  return (
    <>
      {buses?.length > 0 ? (
        <form>
          <input
            type="text"
            value={busId}
            hidden
            onChange={(e) => setBusId(e.target.value)}
          />

          {buses.map((item) => {
            return (
              <CardContainer key={item?._id}>
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
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setBusId(item._id);
                        handleSubmit();
                      }}
                    >
                      Book my pass
                    </button>
                  </p>
                </ServiceProviderDetails>
              </CardContainer>
            );
          })}
        </form>
      ) : (
        <h1>No Buses are available for your route</h1>
      )}
    </>
  );
};

export default DestinationCard;
