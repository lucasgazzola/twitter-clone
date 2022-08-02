import { useEffect, useState } from 'react';
import { useTweetsContext } from '../context/TweetsContext';
import Tweet from './Tweet';

function Feed() {
  const { tweets } = useTweetsContext();
  const [tweetList, setTweetList] = useState([]);

  useEffect(() => {
    setTweetList(tweets);
  }, [tweets]);

  return (
    <div className="flex flex-col text-inherit w-full h-full">
      {tweetList.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </div>
  );
}

export default Feed;
