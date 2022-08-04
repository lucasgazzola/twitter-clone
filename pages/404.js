import { AiOutlineTwitter } from 'react-icons/ai';
import { useRouterContext } from '../context/RouterContext';

function Custom404() {
  const { router } = useRouterContext();
  const handleRedirection = () => {
    router.push('/', '/', { shallow: true });
  };
  return (
    <div className="h-full w-full flex flex-col gap-4 justify-center items-center text-white">
      <div className="w-[120px] h-[120px] fill-white">
        <AiOutlineTwitter className="h-full w-full" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl">{`Sorry!`}</h1>
        <h2>{`This page doesn't exist...`}</h2>
      </div>
      <button
        type="button"
        onClick={handleRedirection}
        className="bg-[#55acee] hover:bg-[#1A8CD8] active:bg-[#167abd] py-1 px-3 text-white rounded-lg"
      >
        Redirect
      </button>
    </div>
  );
}

export default Custom404;
