import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";

const FormContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 60vw;
  border-radius: 14px;
`;
const FormContainerImage = styled.div`
  img {
    width: 100%;
    object-position: center;
  }
`;
const Form = styled.form`
  display: block;
  margin: auto;
  width: 300px;
`;

const Heading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;
const Input = styled.input`
  width: 100%;
  height: 1.5rem;
  border: 1px solid var(--border-primary);
  background-color: var(--input);
  border-radius: 4px;
  margin: 5px 0;
  padding: 10px 0;
  &::placeholder {
    padding-left: 12px;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 0.875rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  width: 100%;
  margin: 1rem 0;
  margin-top: 2rem;
  height: 2.5rem;
  background-color: rgb(221, 20, 50);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    border: 2px rgb(250, 210, 36);
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setisLogin] = useState(true);
  const loading = false;

  console.log(isLogin)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // await login(username, password);
  };

  return (
    <>
      <FormContainer>
        <FormContainerImage>
          <img
            src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1010.jpg?w=740&t=st=1710164733~exp=1710165333~hmac=b443c9732e6450fdfe2ef365f41495bc825323b51c929356ffd6817156386af3"
            alt=""
          />
        </FormContainerImage>
        <Form onSubmit={handleSubmit}>
          
          <Heading>{isLogin? "Sign in ":"Create your account"}</Heading>
          <div>
            {/* <Label htmlFor="username">Username</Label> */}
            <Input
              id="username"
              type="text"
              placeholder="Enter your full name"
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
          {!isLogin && (
             <div>
             <Input
               id="confirmPassword"
               type="password"
               placeholder="Confirm password"

             />
           </div>
          )}
          <Button type="submit" 
          disabled={loading}>
             {isLogin ? "Sign up now" : "Login"}
          </Button>
          
            <StyledLink
             onClick={() => setisLogin(!isLogin)}
             style={{
              fontSize: "0.875rem",
              color: "var(--text-message)",
              marginTop: "0.5rem",
              display: "inline-block",
            }}
          >
            {isLogin ? "Don't have an account? Register Now":"Already existing member ? Login"}
          </StyledLink>
        </Form>
      </FormContainer>
    </>
  );
};

export default Login;
