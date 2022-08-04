import { createContext, useContext, useEffect, useState } from 'react';
import { createProfileIfNotExists } from '../services/profileService';
import { supabase } from '../utils/supabaseClient';

const UserContext = createContext({});

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [session, setSession] = useState(supabase.auth.session());
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(supabase.auth.session())
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setUser(supabase.auth.user());
    setIsLoggedIn(Boolean(supabase.auth.session()));
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(supabase.auth.session());
      setIsLoggedIn(Boolean(session));
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (session) {
      const { user } = session;

      // user is null or
      //   {
      //     "id": "*****************************",
      //     "aud": "authenticated",
      //     "email": "lucasgazzola1@outlook.com",
      //     "user_metadata": {
      //         "avatar_url": "https://avatars.githubusercontent.com/u/85223876?v=4",
      //         "user_name": "lucasgazzola"
      //     },
      // }

      // create profile if doesn't exist
      createProfileIfNotExists(user);

      const { user_metadata, email, id } = user;
      const { avatar_url, user_name } = user_metadata;
      setUser({
        id,
        username: user_name,
        email,
        avatarUrl: avatar_url
      });
    }
  }, [session]);

  const userContextValue = {
    isLoggedIn,
    isLoading,
    setIsLoggedIn,
    setIsLoading,
    user
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
