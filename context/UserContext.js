import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { createProfile } from '../services/profileService';

const UserContext = createContext({});

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children, response }) {
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

  useEffect(() => {
    if (response?.aud === 'authenticated') {
      // TODO: FIX UNCAUGHT ERROR WHEN USER LOGS IN

      const { user_metadata, email, aud, id } = response;
      const { avatar_url, user_name, full_name } = user_metadata;

      // profile creation in the supabase db if it does not exist yet
      createProfile(response);

      // reformat the response
      const loggedUser = {
        id,
        username: user_name,
        email,
        fullName: full_name,
        aud,
        avatarUrl: avatar_url
      };
      router.isReady &&
        router
          .push('/', '/', { shallow: true })
          .then(() => {
            setUser(loggedUser);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    !response &&
      router.isReady &&
      router
        .push('/login', '/login', { shallow: true })
        .then(() => setUser(INITIAL_USER))
        .catch((err) => {
          console.log(err);
        });
  }, [response]);

  const userContextValue = { user };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
