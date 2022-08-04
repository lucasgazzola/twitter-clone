import { createContext, useContext, useEffect, useState } from 'react';
import { getAllTweets } from '../services/tweetsService';

const TweetsContext = createContext([]);

export function useTweetsContext() {
  return useContext(TweetsContext);
}

export function TweetsContextProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      setIsLoading(true);
      try {
        const fetchedTweets = await getAllTweets();
        setTweets(fetchedTweets.reverse());
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    fetchTweets();
  }, []);

  const tweetsContextValue = {
    tweets,
    setTweets,
    isLoading,
    error
  };

  return (
    <TweetsContext.Provider value={tweetsContextValue}>
      {children}
    </TweetsContext.Provider>
  );
}
