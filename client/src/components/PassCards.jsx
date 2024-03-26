import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
const PassCard = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 6px;
  flex-direction: column;
  gap: 5px;
  & {
    text-transform: capitalize;
  }
`;
const PassRoute = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem 0;
  gap: 5rem;
  h6 {
    color: #023058;
  }
`;
const NoPassWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 15px 25px;
  background-color: rgb(221, 20, 50);
  color: white;
`;

const PassCards = () => {
  const [myPasses, setMyPasses] = useState([]);
  const { authUser } = useAppContext();

  useEffect(() => {
    getMyPass();
  }, []);

  const getMyPass = async () => {
    const token = JSON.parse(localStorage.getItem('buspass')).token;
    if (token) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/api/user/get-pass`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        if (data.msg) {
          toast.error(data.msg);
        }
        setMyPasses(data.myPasses);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('No token found, user not logged in');
    }
  };

  return (
    <>
      {myPasses?.length > 0 ? (
        <Wrapper>
          {myPasses.map((pass) => {
            let date = new Date(pass.validity);
            let year = date.getFullYear();
            let month = String(date.getMonth() + 1).padStart(2, '0');
            let day = String(date.getDate()).padStart(2, '0');
            const formattedValidDate = `${day}-${month}-${year}`;

            date = new Date(pass.createdAt);
            year = date.getFullYear();
            month = String(date.getMonth() + 1).padStart(2, '0');
            day = String(date.getDate()).padStart(2, '0');
            const formattedIssueDate = `${day}-${month}-${year}`;

            return (
              <PassCard key={pass._id}>
                <PassRoute>
                  <div>
                    <h6>Name of the Passenger</h6>
                    <p>{authUser.userDetails.name}</p>
                  </div>
                  <div>
                    <h6>From</h6>
                    <p>{pass.from}</p>
                  </div>
                  <div>
                    <h6>To</h6>
                    <p>{pass.to}</p>
                  </div>
                </PassRoute>
                <PassRoute>
                  <div>
                    <h6>Issued at</h6>
                    <p>{`${formattedIssueDate}`}</p>
                  </div>
                  <div>
                    <h6>Valid till </h6>
                    <p>{`${formattedValidDate}`}</p>
                  </div>
                  {/* <button>book</button> */}
                </PassRoute>
                {/* <button>pay</button> */}
              </PassCard>
            );
          })}
        </Wrapper>
      ) : (
        <NoPassWrapper>
          <h2>You have no pass</h2>
          <StyledLink to="buy-pass">Buy one pass </StyledLink>
        </NoPassWrapper>
      )}
    </>
  );
};
export default PassCards;
