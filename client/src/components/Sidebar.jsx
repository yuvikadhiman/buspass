import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
`;

const SidebarContainer = styled.div`
  background:white;
  min-height: 100vh;
  height: 100%;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 50px;
  align-items: center;
`;

const SidebarItem = styled(Link)`
  font-size: 40px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <SidebarContainer>
        <SidebarItem>Hello</SidebarItem>
        <SidebarItem>Hello</SidebarItem>
        <SidebarItem>Hello</SidebarItem>
        <SidebarItem>Hello</SidebarItem>
      </SidebarContainer>
    </Wrapper>
  );
};
export default Sidebar;
