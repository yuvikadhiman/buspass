import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #3d3d3d;
  margin: 20px 5%;
  height: 100px;
  border-radius: 20px;
  @media (max-width: 720px) {
    height: 150px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Contents = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterContent>
        <Contents to="/">About Us</Contents>
        <Contents to="/">Careers</Contents>
        <Contents to="/">Copyright 2024</Contents>
      </FooterContent>
    </Wrapper>
  );
};
export default Footer;
