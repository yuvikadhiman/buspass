import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';
import { APP_URL } from '../utils/config';
import { Link } from 'react-router-dom';

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
    fetch(`${APP_URL}/api/user/get-pass`)
      .then((res) => res.json())
      .then((data) => {
        setMyPasses(data.passes);
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err);
      });
  }, []);

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

// export const passes = [
//   {
//     _id: "65f0b0d2e89098ff91fc2b1f",
//     from: "wakna",
//     to: "jaypee",
//     validity: "2024-04-11T19:45:22.937Z",
//     userId: "65ef6851403d69eefc6a209f",
//     createdAt: "2024-03-12T19:45:22.940Z",
//     updatedAt: "2024-03-12T19:45:22.940Z",
//     __v: 0,
//   },
//   {
//     _id: "65f0b0d2e89098ff91fc2b1f",
//     from: "wakna",
//     to: "jaypee",
//     validity: "2024-04-11T19:45:22.937Z",
//     userId: "65ef6851403d69eefc6a209f",
//     createdAt: "2024-03-12T19:45:22.940Z",
//     updatedAt: "2024-03-12T19:45:22.940Z",
//     __v: 0,
//   },
// ];
