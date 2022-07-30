import { useEffect, useState } from 'react';
import { getAllTweets } from '../services/tweetsService';
import Tweet from './Tweet';

function Feed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchTweets() {
      const fetchedTweets = await getAllTweets();
      setTweets(fetchedTweets.reverse());
    }
    fetchTweets();
  }, []);

  return (
    <div className="flex flex-col text-inherit w-full h-full">
      {tweets && tweets.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
    </div>
  );
}

export default Feed;
