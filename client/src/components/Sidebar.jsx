import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
`;

const SidebarContainer = styled.div`
  background: white;
  min-height: 100vh;
  height: 100%;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarItem = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 15px;
  font-size: 30px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: antiquewhite;
    padding: 10px 20px;
    border-radius: 15px;
  }
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <SidebarContainer>
        <SidebarItem to="">My Pass</SidebarItem>
        <SidebarItem to="buy-pass">Buy a Pass</SidebarItem>
      </SidebarContainer>
    </Wrapper>
  );
};
export default Sidebar;
