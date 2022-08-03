import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { createProfile } from '../services/profileService';
import { supabase } from '../utils/supabaseClient';

const UserContext = createContext({});

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const router = useRouter();

  const INITIAL_USER = {
    id: '',
    username: '',
    email: '',
    fullName: '',
    aud: '',
    avatarUrl: ''
  };

  const [user, setUser] = useState(INITIAL_USER);
  const [session, setSession] = useState(supabase.auth.session());

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    if (session && session.user) {
      const { user } = session;
      if (user?.aud === 'authenticated') {
        const { user_metadata, email, aud, id } = user;
        const { avatar_url, user_name, full_name } = user_metadata;

        // profile creation in the supabase db if it does not exist yet
        createProfile(user);

        // reformat the response
        const loggedUser = {
          id,
          username: user_name,
          email,
          fullName: full_name,
          aud,
          avatarUrl: avatar_url
        };

        // set the user
        setUser(loggedUser);
        // router.isReady &&
        //   router
        //     .push('/', '/', { shallow: true })
        //     .then(() => {
        //       setUser(loggedUser);
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
      }
    }
    !session &&
      router.isReady &&
      router
        .push('/login', '/login', { shallow: true })
        .then(() => setUser(INITIAL_USER))
        .catch((err) => {
          console.log(err);
        });
  }, []);

  const userContextValue = { user };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
