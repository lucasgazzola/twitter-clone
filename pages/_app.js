import { UserContextProvider } from '../context/UserContext';
import '../styles/globals.css';
import { supabase } from '../utils/supabaseClient';

function MyApp({ Component, pageProps }) {
  const response = supabase.auth.user();

  return (
    <div className="h-screen bg-black">
      <UserContextProvider response={response}>
        <Component {...pageProps} />
      </UserContextProvider>
    </div>
  );
}

export default MyApp;
