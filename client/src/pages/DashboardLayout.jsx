import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Sidebar } from '../components';
import { useAppContext } from '../context/AppContext';

const Wrapper = styled.div`
  display: grid;
`;
const MainDashboard = styled.div`
  display: flex;
`;

const DashboardLayout = () => {
  const { authUser } = useAppContext();
  return authUser ? (
    <Wrapper>
      <MainDashboard>
        <Sidebar />
        <Outlet />
      </MainDashboard>
    </Wrapper>
  ) : (
    <>{<Navigate to="/auth" />}</>
  );
};
export default DashboardLayout;
