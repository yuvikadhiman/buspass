import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

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

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const ToStyled = styled.div``;
const ValidityStyled = styled.div``;

const PStyled = styled.div``;

const PassCards = () => {
  const [myPasses, setMyPasses] = useState([]);

  useEffect(() => {
    fetch(`/api/user/get-pass`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.passes);
        setMyPasses(data.passes);
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err);
      });
  }, []);

  return (
    <Wrapper>
      {passes.map((pass) => {
        const date = new Date(pass.validity);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${day}-${month}-${year}`;

        return (
          <PassCard key={pass._id}>
            <PassRoute>
              <div>
                <h6>Name of the Passenger</h6>
                <p>name</p>
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
            <div>
              <p>{`Issued at    ${pass.createdAt}`}</p>
              <p>{`Valid till    ${formattedDate}`}</p>
            </div>
            <button>book</button>
            <button>pay</button>
          </PassCard>
        );
      })}
    </Wrapper>
  );
};
export default PassCards;

export const passes = [
  {
    _id: "65f0b0d2e89098ff91fc2b1f",
    from: "wakna",
    to: "jaypee",
    validity: "2024-04-11T19:45:22.937Z",
    userId: "65ef6851403d69eefc6a209f",
    createdAt: "2024-03-12T19:45:22.940Z",
    updatedAt: "2024-03-12T19:45:22.940Z",
    __v: 0,
  },
  {
    _id: "65f0b0d2e89098ff91fc2b1f",
    from: "wakna",
    to: "jaypee",
    validity: "2024-04-11T19:45:22.937Z",
    userId: "65ef6851403d69eefc6a209f",
    createdAt: "2024-03-12T19:45:22.940Z",
    updatedAt: "2024-03-12T19:45:22.940Z",
    __v: 0,
  },
];
