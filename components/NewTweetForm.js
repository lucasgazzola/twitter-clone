import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useUserContext } from '../context/UserContext';

function NewTweetForm() {
  const [newTweetContent, setNewTweetContent] = useState('');
  const { userData } = useUserContext();

  const { id } = userData;

  const sendNewTweet = async (user, content) => {
    try {
      const { data, error } = await supabase
        .from('tweets')
        .insert({ user, content });
      if (error) {
        throw new Error("We couldn't send the tweet");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendNewTweet(id, newTweetContent);
    setNewTweetContent('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="w-full flex flex-col gap-4 items-end"
    >
      <input
        className="w-full px-4 pt-2 pb-8 border-b-[1px] border-gray-600 bg-inherit placeholder:text-gray-600 placeholder:font-semibold"
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
