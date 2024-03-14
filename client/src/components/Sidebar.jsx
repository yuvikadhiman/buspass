import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";

const Wrapper = styled.div`
  display: block;
`;

const SidebarContainer = styled.div`
  background: white;
  min-height: 100vh;
  height: 100%;
  width: 250px;
`;
const SidebarContext = styled.div`
  position: sticky;
  top: 0;
`;
const SidebarLinks = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  .nav-link {
    display: flex;
    align-items: center;
    color: #6b7280;
    text-decoration: none;
    padding: 1rem 0;
    padding-left: 2.5rem;
    text-transform: capitalize;
    transition: 0.3s ease-in-out all;
  }
  .nav-link:hover {
    background: #f8fafc;
    padding-left: 3rem;
    color: #1e1f23;
  }
  .nav-link:hover .icon {
    color: rgb(221, 20, 50);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: 0.3s ease-in-out all;
    color: rgb(24, 23, 23);
  }
  .active {
    color: #3a3737;
  }
  .active .icon {
    color: rgb(221, 20, 50);
  }
`;

const DashLogo = styled.header`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  .logo {
    height: 35px;
  }
  h5 {
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1rem;
    color: rgb(221, 20, 50);
  }
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <SidebarContainer>
        <SidebarContext>
          <DashLogo>
            <Link to={"/"}>
              <img src={Logo} alt="" className="logo" />
            </Link>

            <h5>Book My Pass</h5>
          </DashLogo>
          <SidebarLinks>
            {links.map((link) => {
              const { text, path, id, icon } = link;
              return (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  key={id}
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </SidebarLinks>
        </SidebarContext>
        {/* <SidebarItem to="">My Pass</SidebarItem>
        <SidebarItem to="buy-pass">Buy a Pass</SidebarItem> */}
      </SidebarContainer>
    </Wrapper>
  );
};
export default Sidebar;

export const links = [
  { id: 1, text: "My Pass", path: "", icon: <MdQueryStats></MdQueryStats> },
  { id: 2, text: "Book Pass", path: "buy-pass", icon: <FaWpforms></FaWpforms> },
];
