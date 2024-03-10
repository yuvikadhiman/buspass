import styled from 'styled-components';
// import homepageBus from '../assets/HeroImage.png';

const Wrapper = styled.div`
  background-image: url("https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg7.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height :50vh;
  position: relative;
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  overflow: hidden;
  margin: 0 10%;
  border-radius: 40px;
  justify-content: space-between; */
  /* @media screen and (max-width: 1000px) {
    margin: 0 7%;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  @media screen and (max-width: 700px) {
    margin: 0 5%;
  } */
`;

// const TextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-left: 7rem;
//   color: white;
//   margin-top: 10rem;
//   @media screen and (max-width: 1300px) {
//     margin-left: 10%;
//   }
//   @media screen and (max-width: 1200px) {
//     margin-right: 5%;
//   }
// `;

// const Heading = styled.h1`
//   font-size: 45px;
//   @media screen and (max-width: 800px) {
//     font-size: 30px;
//   }
// `;

// const SubHeading = styled.p`
//   font-size: 15px;
// `;

// const JourneyCard = styled.div`
//   background-color: rgba(0, 0, 0, 0.5);
//   backdrop-filter: blur(5px);
//   -webkit-backdrop-filter: blur(10px);
//   padding: 10px;
//   min-width: 200px;
//   width: 400px;
//   border-radius: 30px;
//   margin: auto;
//   text-align: center;
//   margin-left: 20%;
//   @media (min-width: 1300px) and (max-width: 1500px) {
//     margin-left: 15%;
//   }
//   @media screen and (max-width: 1300px) {
//     margin-left: 10%;
//   }
//   @media screen and (max-width: 1200px) {
//     margin-right: 5%;
//   }
//   @media screen and (max-width: 800px) {
//     font-size: 30px;
//   }
//   @media screen and (max-width: 500px) {
//     width: 80%;
//     margin-right: 0;
//     margin-left: 0;
//   }
// `;

// const JourneyCardTitle = styled.h2`
//   font-size: 1.25rem;
//   color: white;
//   margin-top: 1rem;
// `;

// const JourneyCardDescription = styled.p`
//   font-size: 0.875rem; /* Adjust font size as needed */
//   color: white;
//   margin-top: 0.5rem;
// `;
const Journey=styled.div`
  position: absolute;
  width: 620px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: #ffffff;
  padding: 40px 30px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;


`;
const JourneyForm = styled.form`
  display: flex;
  /* gap: 0.5rem; */
  /* border: 1px solid grey; */
  /* padding: 1rem; */
  border-radius: 8px;

`;

const JourneyInput = styled.input`
  width: 35%;
  height: 2.5rem;
  border: 0.1px solid gainsboro;
  /* border: 1px solid var(--border-primary); */
  padding-left: 10px;
  &:focus {
    outline: none;
  }
  &:hover{
    background-color: aliceblue;
  }
 /* border: 1px solid var(--border-primary); */
  /* width: 80%;
  height: 2.5rem;
  border: 1px solid var(--border-primary);
  border-radius: 50px;
  background-color: var(--input);
  margin-bottom: 1rem;
  padding-left: 5%;
  padding-right: 15%;
  padding-top: 5px;


  padding-bottom: 5px; */


`;

const JourneyButton = styled.button`
border: none;
cursor: pointer;
width: 170px;
color: white;
background-color: #2C99F0;
border-radius: 4px;
margin-left: 0.5rem;
  /* background-color: var(--primary);
  color: black;
  padding: 1rem 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
  } */
`;

const FindMyJourney = () => {
  return (
    <Wrapper>
      <Journey>
      <JourneyForm action="">
          <JourneyInput type="text" placeholder="From" />
          <JourneyInput type="text" placeholder="To" />
          <JourneyButton type="submit">Find My Journey</JourneyButton>
        </JourneyForm>
      </Journey>
      {/* <TextContainer>
        <Heading>
          Travel Well & <br /> Easily With Us
        </Heading>
        <SubHeading>
          Your traveling satisfaction will be more exciting!
        </SubHeading>
      </TextContainer> */}
      {/* <JourneyCard>
        <JourneyCardTitle>Choose Your Journey</JourneyCardTitle>
        <JourneyCardDescription>
          isse velit iaculis duis neassa quam iaculis condimentum eu
        </JourneyCardDescription>
        <JourneyForm action="">
          <JourneyInput type="text" placeholder="From" />
          <JourneyInput type="text" placeholder="To" />
          <JourneyButton type="submit">Find My Journey</JourneyButton>
        </JourneyForm>
      </JourneyCard> */}
    </Wrapper>
  );
};

export default FindMyJourney;
