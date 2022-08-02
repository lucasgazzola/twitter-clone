import { createContext, useContext, useEffect, useState } from 'react';
import { getAllTweets } from '../services/tweetsService';

const TweetsContext = createContext([]);

export function TweetsContextProvider({ children }) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const fetchedTweets = await getAllTweets();
      setTweets(fetchedTweets.reverse());
    };
    fetchTweets();
  }, []);

  const tweetsContextValue = {
    tweets,
    setTweets
  };

  return (
    <TweetsContext.Provider value={tweetsContextValue}>
      {children}
    </TweetsContext.Provider>
  );
}

export function useTweetsContext() {
  return useContext(TweetsContext);
}
