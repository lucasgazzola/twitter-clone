import { UserContextProvider } from '../context/UserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div className="h-screen bg-black">
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </div>
  );
}

export default MyApp;
