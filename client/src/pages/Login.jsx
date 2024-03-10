import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Loader from '../components/Loader';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primaryBg);
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 24rem;
  margin: auto;
  width: 30rem;
`;

const Form = styled.form`
  width: 80%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: white;
  border-radius: 20px;
`;

// const Label = styled.label`
//   padding: 0.5rem;
//   margin-top: 10px;
//   margin-bottom: 10px;
// `;

const Input = styled.input`
  width: 80%;
  height: 2.5rem;
  border: 1px solid var(--border-primary);
  border-radius: 10px;
  background-color: var(--input);
  margin-bottom: 1rem;
  padding-left: 5%;
  padding-right: 15%;
  margin-top: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  background-color: var(--primary);
  color: black;
  border-radius: 10px;
  border: 0;

  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  &:hover {
    border: 2px rgb(250, 210, 36);
    background-color: white;
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loading = false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await login(username, password);
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Heading>Login</Heading>
          <div>
            {/* <Label htmlFor="username">Username</Label> */}
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            {/* <Label htmlFor="password">Password</Label> */}
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? <Loader /> : 'Login'}
          </Button>
          <StyledLink
            to="/register"
            style={{
              fontSize: '0.875rem',
              color: 'var(--text-message)',
              marginTop: '0.5rem',
              display: 'inline-block',
            }}
          >
            {"Don't"} have an account? Register Now
          </StyledLink>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
