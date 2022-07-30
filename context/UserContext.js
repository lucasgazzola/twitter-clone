import { createContext, useContext, useState } from 'react';

const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({});

  const userContextValue = { userData, setUserData };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
