/* eslint-disable no-undef */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Homepage,
  Auth,
  DashboardLayout,
  HomeLayout,
  Error,
  MyPass,
} from './pages';
import BuyPass from './pages/BuyPass';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFail from './pages/PaymentFail';
import AdminPage from './pages/AdminPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/admin',
        element: <AdminPage />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <MyPass />,
      },
      {
        path: 'buy-pass',
        element: <BuyPass />,
      },
    ],
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: 'error',
    element: <Error />,
  },
  {
    path: '/success',
    element: <PaymentSuccess />,
  },
  {
    path: '/failed',
    element: <PaymentFail />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
