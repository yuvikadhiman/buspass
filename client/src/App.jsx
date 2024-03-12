import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import { useAppContext } from './context/AppContext';

function App() {
  const { authUser } = useAppContext();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/dashboard"
          element={authUser ? <Dashboard /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={authUser ? <Navigate to="/dashboard" /> : <Auth />}
        />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
