/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Loader from './Loader';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

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
    width: 120px;
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
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (!authUser) {
      setTimeout(() => navigate('/auth'), 500);
      return toast.error('Please login first');
    }
    try {
      const token = JSON.parse(localStorage.getItem('buspass')).token;
      const stripe_key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
      const stripe = await loadStripe(stripe_key);

      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/book`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          busId,
        }),
      });

      const session = await res.json();
      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        // toast.error(result.error)
        console.log(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
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
                      Buy with Card
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setBusId(item._id);
                        handleSubmit();
                      }}
                    >
                      Buy with Crypto
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
