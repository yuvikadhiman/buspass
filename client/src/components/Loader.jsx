import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderComponent = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid white;
  border-top-color: grey;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`;

const Loader = () => {
  return <LoaderComponent />;
};

export default Loader;
