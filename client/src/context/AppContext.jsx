/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem('buspass')) || null
  );

  const [loading, setLoading] = useState(false);

  const logoutUser = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setAuthUser(null);
      localStorage.removeItem('buspass');
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <AppContext.Provider value={{ authUser, setAuthUser, logoutUser, loading }}>
      {children}
    </AppContext.Provider>
  );
};
