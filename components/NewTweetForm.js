import { useEffect, useState } from 'react';
import { useTweetsContext } from '../context/TweetsContext';
import { useUserContext } from '../context/UserContext';
import { createNewTweet } from '../services/tweetsService';

function NewTweetForm() {
  const [newTweetContent, setNewTweetContent] = useState('');
  const [id, setId] = useState('');
  const { user } = useUserContext();
  const { setTweets } = useTweetsContext();

  useEffect(() => {
    const { id } = user;
    setId(id);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdTweet = await createNewTweet(id, newTweetContent);
    // createdTweet es
    //   {
    //     "id": 21,
    //     "content": "asd",
    //     "created_at": "2022-08-02T03:16:11.258352+00:00",
    //     "likes": 0,
    //     "user": "29af4cb4-b34b-4704-ade8-51a06a59d95f",
    //     "retweets": 0
    // }
    setTweets((prev) => [createdTweet, ...prev]);
    setNewTweetContent('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="w-full flex flex-col gap-4 items-end"
    >
      <input
        className="w-full px-4 pt-2 pb-8 border-b-[1px] border-gray-600 bg-inherit placeholder:text-gray-600 placeholder:font-semibold outline-none"
        value={newTweetContent}
        onChange={(e) => setNewTweetContent(e.target.value)}
        type="text"
        name="newtweet"
        id="newtweetinput"
        placeholder="What's happening?"
      />
      <button
        className="bg-[#55acee] y-2 px-4 py-2 rounded-3xl disabled:opacity-60 enabled:hover:bg-cyan-800 enabled:active:bg-cyan-700"
        type="submit"
        disabled={!newTweetContent}
      >
        Tweet
      </button>
    </form>
  );
}

export default NewTweetForm;
