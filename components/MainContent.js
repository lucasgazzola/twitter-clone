import Feed from './Feed';
import NewTweet from './NewTweet';
import { BiRefresh } from 'react-icons/bi';
import { useTweetsContext } from '../context/TweetsContext';
import { getAllTweets } from '../services/tweetsService';

function MainContent() {
  const { setTweets } = useTweetsContext();

  // TODO: corregir email unico en supabase cuando envio tweet

  const handleRefresh = async () => {
    const fetchedTweets = await getAllTweets();
    setTweets(fetchedTweets.reverse());
  };

  return (
    <main className="flex flex-col text-inherit h-fit border-x-[1px] border-gray-600 w-[600px]">
      <header className="flex justify-between items-center p-4 bg-[#000000aa] w-full top-0 left-0 sticky z-50">
        <h2 className="font-bold text-xl">Inicio</h2>
        <button
          onClick={handleRefresh}
          type="button"
          className="hover:animate-spin active:translate-y-1"
        >
          <BiRefresh size={'30px'} color="#0099ff" />
        </button>
      </header>
      <NewTweet />
      <Feed />
    </main>
  );
}

export default MainContent;
