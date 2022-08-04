import { UserContextProvider } from '../context/UserContext';
import { RouterContextProvider } from '../context/RouterContext';
import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen bg-black">
      <RouterContextProvider>
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </RouterContextProvider>
    </div>
  );
}

export default MyApp;
