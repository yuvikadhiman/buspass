import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const Wrapper = styled.div``;

const PassContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
`;

const PassCard = styled.div`
  display: flex;
  background-color: #ffffff;
  height: 100px;
  padding: 30px;
  border-radius: 20px;
  width: 300px;
  flex-direction: column;
  gap: 5px;
`;

const FromStyled = styled.div`
  display: flex;
  flex-direction: row;
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
      <PassContainer>
        {myPasses.map((pass) => {
          const date = new Date(pass.validity);
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          const formattedDate = `${day}-${month}-${year}`;

          return (
            <PassCard key={pass._id}>
              <DivStyled>
                <PStyled>From :</PStyled>
                <FromStyled>{pass.from}</FromStyled>
              </DivStyled>
              <DivStyled>
                <PStyled>To :</PStyled>
                <ToStyled>{pass.to}</ToStyled>
              </DivStyled>
              <DivStyled>
                <PStyled>Valid Till :</PStyled>
                <ValidityStyled>{formattedDate}</ValidityStyled>
              </DivStyled>
            </PassCard>
          );
        })}
      </PassContainer>
    </Wrapper>
  );
};
export default PassCards;
