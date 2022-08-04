import Head from 'next/head';
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';
import { TweetsContextProvider } from '../context/TweetsContext';
import { useEffect } from 'react';
import { useUserContext } from '../context/UserContext';
import { useRouter } from 'next/router';
import { useRouterContext } from '../context/RouterContext';

export default function Home() {
  // const router = useRouter();
  const { router } = useRouterContext();
  const { isLoading, isLoggedIn } = useUserContext();

  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      router.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, isLoading]);

  isLoading && <div className="">Loading</div>;

  return (
    <div className="h-full relative flex gap-2 text-white">
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone" />
      </Head>
      <NavBar />
      <TweetsContextProvider>
        <MainContent />
      </TweetsContextProvider>
    </div>
  );
}
