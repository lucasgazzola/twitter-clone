import Feed from './Feed';
import NewTweet from './NewTweet';

function MainContent() {
  return (
    <main className="flex flex-col text-inherit h-fit border-x-[1px] border-gray-600 w-[600px]">
      <header className="p-4 bg-[#000000aa] w-full top-0 left-0 sticky z-50">
        <h2 className="font-bold text-xl">Inicio</h2>
      </header>
      <NewTweet />
      <Feed />
    </main>
  );
}

export default MainContent;
