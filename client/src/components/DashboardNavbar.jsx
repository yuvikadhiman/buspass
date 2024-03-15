import {FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';
import {useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DashboardNavbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { authUser, logoutUser } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    setTimeout(() => navigate('/'), 500);
    toast.success('Logged out successfully');
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <div>
          <h2 className="logo-text">Dashboard</h2>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {authUser?.userDetails?.name}
            {/* {user.firstName} */}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button onClick={handleLogout} className="dropdown-btn">
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 35rem;
    width: 90%;
    /* justify-content: space-between; */
  }
  background: white;
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    border: none;
    color: #ffffff;
    padding: 0.6rem 1rem;
    font-size: 14px;
    background-color: rgb(221, 20, 50);
    position: relative;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .dropdown {
    position: absolute;
    top: 42px;
    left: 0;
    width: 100%;
    background: rgb(244, 203, 209);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 8px 0;
    text-align: center;
    visibility: hidden;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: rgb(221, 20, 50);
    letter-spacing: 1px;
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    margin: 0;
    font-size: 20px;
  }
`;
export default DashboardNavbar;
