import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';
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

const DownloadPass = styled.button`
  width: 120px;
  background-color: rgb(221, 20, 50);
  height: 40px;
  color: white;
  border: none;
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

        setMyPasses(data.myPasses);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('No token found, user not logged in');
    }
  };

  const handleDownloadPass = async (pass) => {
    // Base color
    const baseColor = 'rgb(221, 20, 50)';

    try {
      // Generating QR code URL
      const qrCodeUrl = `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${pass._id}`;

      // Creating HTML representation of the pass with CSS styles and QR code
      const passHtml = `
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 20px;
          }
          .ticket {
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            margin: 20px auto;
            max-width: 400px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            color: ${baseColor};
          }
          .ticket h3 {
            margin-top: 0;
            color: ${baseColor};
          }
          .ticket p {
            margin: 5px 0;
            color: #666;
          }
          .ticket hr {
            border: none;
            border-top: 1px dashed #ccc;
            margin: 10px 0;
          }
          .qr-code {
            margin-top: 20px;
            text-align: center;
          }
          .qr-code img {
            width: 150px;
            height: 150px;
          }
        </style>
        <div class="ticket">
          <h3>Bus Pass</h3>
          <p><strong>Name of the Passenger:</strong> ${
            authUser.userDetails.name
          }</p>
          <hr>
          <p><strong>From:</strong> ${pass.from}</p>
          <p><strong>To:</strong> ${pass.to}</p>
          <hr>
          <p><strong>Issued at:</strong> ${new Date(
            pass.createdAt
          ).toLocaleDateString()}</p>
          <p><strong>Valid till:</strong> ${new Date(
            pass.validity
          ).toLocaleDateString()}</p>
          <div class="qr-code">
            <img src="${qrCodeUrl}" alt="QR Code">
          </div>
        </div>
      `;

      // Open a new window with the pass HTML content
      const printWindow = window.open('', '_blank');
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>Bus Pass</title>
          </head>
          <body>${passHtml}</body>
        </html>
      `);
      printWindow.document.close();

      setTimeout(() => {
        printWindow.print();
      }, 100);
    } catch (error) {
      console.error('Error generating QR code:', error);
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
                  <DownloadPass onClick={() => handleDownloadPass(pass)}>
                    Download Pass
                  </DownloadPass>
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
